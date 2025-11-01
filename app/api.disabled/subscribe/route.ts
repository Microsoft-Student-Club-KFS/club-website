import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { sendSubscriptionConfirmation } from '@/lib/email';
import { isRateLimited, getClientIp } from '@/lib/rateLimiter';
import { trackEventServer, EVENTS } from '@/lib/tracking';
import crypto from 'crypto';

/**
 * POST /api/subscribe
 * Subscribe to mailing list (creates unconfirmed subscriber and sends confirmation email)
 */
export async function POST(request: Request) {
  try {
    // Rate limiting: 5 requests per minute per IP
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp, 5, 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, name, source } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await db.mailSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      if (existing.isConfirmed) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 400 }
        );
      } else {
        // Resend confirmation if not confirmed
        const confirmToken = crypto.randomBytes(32).toString('hex');
        const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

        await db.mailSubscriber.update({
          where: { email },
          data: {
            confirmToken,
            tokenExpires,
            name: name || existing.name,
            source: source || existing.source,
          },
        });

        // Get base URL
        const baseUrl = new URL(request.url).origin;

        // Send confirmation email
        await sendSubscriptionConfirmation(
          email,
          name || existing.name,
          confirmToken,
          baseUrl
        );

        return NextResponse.json({
          message: 'Confirmation email resent. Please check your inbox.',
        });
      }
    }

    // Generate confirmation token
    const confirmToken = crypto.randomBytes(32).toString('hex');
    const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

    // Create subscriber
    const subscriber = await db.mailSubscriber.create({
      data: {
        email,
        name: name || null,
        source: source || 'website',
        isConfirmed: false,
        confirmToken,
        tokenExpires,
      },
    });

    // Track subscription submission
    await trackEventServer(EVENTS.SUBSCRIBE_SUBMIT, {
      subscriberId: subscriber.id,
      source: source || 'website',
    });

    // Get base URL
    const baseUrl = new URL(request.url).origin;

    // Send confirmation email
    await sendSubscriptionConfirmation(email, name, confirmToken, baseUrl);

    return NextResponse.json({
      message: 'Subscription initiated. Please check your email to confirm.',
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
