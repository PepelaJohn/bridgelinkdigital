import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import crypto from 'crypto';
import { dbConnect } from '@/src/lib/db';
import Subscriber from '@/src/models/Subscriber';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    await dbConnect();

    const existingSubscriber = await Subscriber.findOne({
      email: email.toLowerCase(),
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'This email is already subscribed to our newsletter' },
        { status: 409 }
      );
    }

    // Generate secure unsubscribe token
    const unsubscribeToken = crypto.randomBytes(32).toString('hex');

    // Create new subscriber
    const subscriber = new Subscriber({
      email: email.toLowerCase(),
      unsubscribeToken,
      subscribedAt: new Date(),
    });

    await subscriber.save();

    // Build unsubscribe URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const unsubscribeUrl = `${baseUrl}/api/unsubscribe?token=${unsubscribeToken}`;

    // Send welcome email
    try {
      await resend.emails.send({
        from: 'newsletter@bridgelink.co.ke',
        to: [email],
        subject: 'You are now subscribed to BridgeLink Newsletter',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">Welcome to BridgeLink Newsletter! 🎉</h2>
            
            <p style="color: #34495e; line-height: 1.6; margin-bottom: 20px;">
              Thank you for subscribing to our newsletter! We're excited to have you join our community.
            </p>
            
            <p style="color: #34495e; line-height: 1.6; margin-bottom: 20px;">
              You'll receive regular updates about our latest news, insights, and exclusive content directly in your inbox.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2c3e50; margin-top: 0;">What to expect:</h3>
              <ul style="color: #34495e; line-height: 1.6;">
                <li>Weekly insights and industry updates</li>
                <li>Exclusive content and early access to new features</li>
                <li>Tips and best practices from our team</li>
              </ul>
            </div>
            
            <p style="color: #7f8c8d; font-size: 14px; margin-top: 30px;">
              If you ever want to unsubscribe, you can 
              <a href="${unsubscribeUrl}" style="color: #3498db; text-decoration: none;">click here</a> 
              or use the unsubscribe link at the bottom of any newsletter email.
            </p>
            
            <hr style="border: none; border-top: 1px solid #ecf0f1; margin: 30px 0;">
            
            <p style="color: #95a5a6; font-size: 12px; text-align: center;">
              BridgeLink Newsletter<br>
              <a href="${unsubscribeUrl}" style="color: #95a5a6; text-decoration: none;">Unsubscribe</a>
            </p>
          </div>
        `,
        headers: {
          'List-Unsubscribe': `<${unsubscribeUrl}>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        },
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);

      // If email fails, we might want to remove the subscriber or mark as pending
      // For now, we'll keep the subscription but log the error
      return NextResponse.json(
        {
          message: 'Subscription successful, but welcome email failed to send',
          email: email,
          subscribed: true,
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      {
        message: 'Successfully subscribed to newsletter',
        email: email,
        subscribed: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    // Handle specific MongoDB errors
    if (error instanceof Error) {
      if (error.message.includes('duplicate key')) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 409 }
        );
      }

      if (error.message.includes('validation failed')) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
