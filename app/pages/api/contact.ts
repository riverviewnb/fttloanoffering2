import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Ensure this API route runs in the Node.js runtime (not Edge)
export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, company, message } = req.body;

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // e.g., james.wedderburn@gcan.com
      pass: process.env.EMAIL_PASS  // App password or SMTP password
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'james.wedderburn@gcan.com',
      subject: `New Expression of Interest from ${name}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (err: any) {
    console.error('Error sending email:', err);
    return res.status(500).json({ message: 'Email sending failed', error: err.message });
  }
}