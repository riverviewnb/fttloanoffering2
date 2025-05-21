import { NextRequest, NextResponse } from 'next/server';

// Ensure this route uses the Node.js runtime, not Edge
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const nodemailer = await import('nodemailer').then(mod => mod.default);

  const { name, email, phone, company, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: 'jamesw@fttproducts.com',
    subject: `New Expression of Interest from ${name}`,
    html: `
      <h3>New Contact Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  });

  return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
}
