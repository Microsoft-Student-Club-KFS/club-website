import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { trackEventServer, EVENTS } from '@/lib/tracking';

/**
 * GET /api/subscribe/confirm?token=...
 * Confirm email subscription
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Invalid Confirmation Link</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              .error { color: #ef4444; }
            </style>
          </head>
          <body>
            <h1 class="error">Invalid Confirmation Link</h1>
            <p>The confirmation link is invalid or incomplete.</p>
            <a href="/">Return to Home</a>
          </body>
        </html>
        `,
        {
          status: 400,
          headers: { 'Content-Type': 'text/html' },
        }
      );
    }

    // Find subscriber with matching token
    const subscriber = await db.mailSubscriber.findFirst({
      where: {
        confirmToken: token,
      },
    });

    if (!subscriber) {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Invalid Token</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              .error { color: #ef4444; }
            </style>
          </head>
          <body>
            <h1 class="error">Invalid Confirmation Token</h1>
            <p>This confirmation link is invalid or has already been used.</p>
            <a href="/">Return to Home</a>
          </body>
        </html>
        `,
        {
          status: 404,
          headers: { 'Content-Type': 'text/html' },
        }
      );
    }

    // Check if already confirmed
    if (subscriber.isConfirmed) {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Already Confirmed</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              .success { color: #10b981; }
            </style>
          </head>
          <body>
            <h1 class="success">Already Confirmed</h1>
            <p>Your email has already been confirmed. You're all set!</p>
            <a href="/">Return to Home</a>
          </body>
        </html>
        `,
        {
          status: 200,
          headers: { 'Content-Type': 'text/html' },
        }
      );
    }

    // Check if token expired
    if (subscriber.tokenExpires && subscriber.tokenExpires < new Date()) {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Token Expired</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              .error { color: #ef4444; }
            </style>
          </head>
          <body>
            <h1 class="error">Confirmation Link Expired</h1>
            <p>This confirmation link has expired. Please subscribe again to receive a new confirmation email.</p>
            <a href="/">Return to Home</a>
          </body>
        </html>
        `,
        {
          status: 410,
          headers: { 'Content-Type': 'text/html' },
        }
      );
    }

    // Confirm subscription
    await db.mailSubscriber.update({
      where: { id: subscriber.id },
      data: {
        isConfirmed: true,
        confirmToken: null,
        tokenExpires: null,
      },
    });

    // Track confirmation event
    await trackEventServer(EVENTS.SUBSCRIBE_CONFIRM, {
      subscriberId: subscriber.id,
      email: subscriber.email,
    });

    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Subscription Confirmed</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 50px;
              background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
              color: white;
            }
            .container { 
              background: white; 
              color: #111827; 
              padding: 40px; 
              border-radius: 8px; 
              max-width: 500px; 
              margin: 0 auto;
              box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            .success { color: #10b981; }
            .button {
              display: inline-block;
              background: #3b82f6;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 6px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="success">Subscription Confirmed!</h1>
            <p>Thank you for confirming your email subscription to the MSC Kafr El-Shaikh Club newsletter.</p>
            <p>You'll now receive updates about our events, projects, and news.</p>
            <a href="/" class="button">Go to Homepage</a>
          </div>
        </body>
      </html>
      `,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      }
    );
  } catch (error) {
    console.error('Confirmation error:', error);
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Error</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            .error { color: #ef4444; }
          </style>
        </head>
        <body>
          <h1 class="error">Error</h1>
          <p>An error occurred while processing your confirmation.</p>
          <a href="/">Return to Home</a>
        </body>
      </html>
      `,
      {
        status: 500,
        headers: { 'Content-Type': 'text/html' },
      }
    );
  }
}
