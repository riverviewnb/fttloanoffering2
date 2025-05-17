import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, company, message } = req.body;

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // e.g., james.wedderburn@gcan.com
        pass: process.env.EMAIL_PASS  // app password or SMTP password
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
    } catch (err) {
      console.error('Email error:', err);
      return res.status(500).json({ message: 'Email failed to send' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
