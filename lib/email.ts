import nodemailer from 'nodemailer';

// Email configuration from environment variables
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const ADMIN_EMAILS = process.env.ADMIN_EMAILS?.split(',') || ['admin@msc-club.com'];
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@msc-club.com';
const FROM_NAME = process.env.FROM_NAME || 'MSC Kafr El-Shaikh Club';

// Create reusable transporter
const createTransporter = () => {
  // In development, log to console if SMTP not configured
  if (!SMTP_USER || !SMTP_PASS) {
    console.warn('⚠️ SMTP credentials not configured. Emails will be logged to console.');
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}

/**
 * Send an email using Nodemailer
 * @param options Email options (to, subject, html, text)
 * @returns Promise with send result
 */
export async function sendEmail(options: EmailOptions): Promise<void> {
  const transporter = createTransporter();

  // If no transporter (dev mode without SMTP), log to console
  if (!transporter) {
    console.log('📧 EMAIL (Console Mode):');
    console.log('To:', options.to);
    console.log('Subject:', options.subject);
    console.log('HTML:', options.html);
    console.log('Text:', options.text || 'N/A');
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    console.log('✅ Email sent:', info.messageId);
  } catch (error) {
    console.error('❌ Email send error:', error);
    throw new Error('Failed to send email');
  }
}

/**
 * Send subscription confirmation email
 * @param email Subscriber email
 * @param name Subscriber name (optional)
 * @param confirmToken Confirmation token
 * @param baseUrl Base URL of the site
 */
export async function sendSubscriptionConfirmation(
  email: string,
  name: string | null,
  confirmToken: string,
  baseUrl: string
): Promise<void> {
  const confirmUrl = `${baseUrl}/api/subscribe/confirm?token=${confirmToken}`;
  const displayName = name || 'there';

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to MSC Club!</h1>
          </div>
          <div class="content">
            <p>Hi ${displayName},</p>
            <p>Thank you for subscribing to the MSC Kafr El-Shaikh Club newsletter! We're excited to have you join our community.</p>
            <p>To complete your subscription, please confirm your email address by clicking the button below:</p>
            <div style="text-align: center;">
              <a href="${confirmUrl}" class="button">Confirm Subscription</a>
            </div>
            <p>Or copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #3b82f6;">${confirmUrl}</p>
            <p>This confirmation link will expire in 24 hours.</p>
            <p>If you didn't sign up for this newsletter, you can safely ignore this email.</p>
            <p>Best regards,<br>The MSC Club Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} MSC Kafr El-Shaikh Club. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
Hi ${displayName},

Thank you for subscribing to the MSC Kafr El-Shaikh Club newsletter!

To complete your subscription, please confirm your email address by clicking this link:
${confirmUrl}

This confirmation link will expire in 24 hours.

If you didn't sign up for this newsletter, you can safely ignore this email.

Best regards,
The MSC Club Team

© ${new Date().getFullYear()} MSC Kafr El-Shaikh Club. All rights reserved.
  `;

  await sendEmail({
    to: email,
    subject: 'Confirm your MSC Club Newsletter Subscription',
    html,
    text,
  });
}

/**
 * Send contact form notification to admins
 * @param contactData Contact form data
 */
export async function sendContactNotification(contactData: {
  name: string;
  email: string;
  department?: string;
  message: string;
}): Promise<void> {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1f2937; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #4b5563; }
          .value { color: #111827; margin-top: 5px; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${contactData.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${contactData.email}</div>
            </div>
            ${contactData.department ? `
            <div class="field">
              <div class="label">Department/Topic:</div>
              <div class="value">${contactData.department}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="message-box">${contactData.message.replace(/\n/g, '<br>')}</div>
            </div>
            <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
              Submitted at: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
New Contact Form Submission

Name: ${contactData.name}
Email: ${contactData.email}
${contactData.department ? `Department/Topic: ${contactData.department}\n` : ''}
Message:
${contactData.message}

Submitted at: ${new Date().toLocaleString()}
  `;

  await sendEmail({
    to: ADMIN_EMAILS,
    subject: `New Contact: ${contactData.name} - ${contactData.department || 'General'}`,
    html,
    text,
  });
}
