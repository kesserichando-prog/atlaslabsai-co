import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the submission (for now - in production, send via SendGrid)
    console.log('Contact form submission:', { name, email, message });

    // TODO: Send email via SendGrid
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'contact@atlaslabsai.co',
    //   from: 'noreply@atlaslabsai.co',
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json(
      { message: 'Thank you for your message! We\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}