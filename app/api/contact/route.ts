import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string | null;
  email?: string | null;
  message?: string | null;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // Simulate email sending by logging to server console
  console.log('Simulated email send:', {
    to: process.env.CONTACT_TO_EMAIL || 'you@example.com',
    from: body.email,
    subject: `Portfolio contact from ${body.name}`,
    message: body.message,
  });

  // Simulate latency
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ ok: true });
}


