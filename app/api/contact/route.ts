import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Ensure Node.js environment (not Edge)

export async function POST(req: NextRequest) {
  const nodemailer = (await import('nodemailer')).default;

  try {
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
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Email sending failed', error: error.message }, { status: 500 });
  }
}
