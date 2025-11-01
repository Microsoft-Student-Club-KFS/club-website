import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { sendContactNotification } from '@/lib/email';
import { isRateLimited, getClientIp } from '@/lib/rateLimiter';
import { trackEventServer, EVENTS } from '@/lib/tracking';

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(request: Request) {
  try {
    // Rate limiting: 3 requests per 5 minutes per IP
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp, 3, 5 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, department, message } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
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

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Validate length limits
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name is too long (max 100 characters)' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long (max 5000 characters)' },
        { status: 400 }
      );
    }

    // Store in database
    const contactMessage = await db.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        department: department?.trim() || null,
        message: message.trim(),
      },
    });

    // Track contact submission
    await trackEventServer(EVENTS.CONTACT_SUBMIT, {
      contactId: contactMessage.id,
      department: contactMessage.department || 'none',
    });

    // Send notification email to admins
    try {
      await sendContactNotification({
        name: contactMessage.name,
        email: contactMessage.email,
        department: contactMessage.department || undefined,
        message: contactMessage.message,
      });
    } catch (emailError) {
      console.error('Failed to send contact notification email:', emailError);
      // Continue even if email fails - message is stored in DB
    }

    return NextResponse.json({
      message: 'Thank you for your message. We will get back to you soon!',
      id: contactMessage.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
