import { NextResponse } from 'next/server';

const LEADFORGE_INGEST_URL = 'https://app.atlaslabsai.co/api/public/ingest';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message, consent_calls, consent_sms } = body;

    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, email, phone, and service are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    try {
      await fetch(LEADFORGE_INGEST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.LEADFORGE_INTERNAL_KEY || '',
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          service_interest: service,
          message,
          consent_calls,
          consent_sms,
          source: 'website_form',
        }),
      });
    } catch (err) {
      console.error('LeadForge ingest failed:', err);
    }

    return NextResponse.json({ message: "Inquiry received — we'll be in touch soon." }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
