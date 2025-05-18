import type { NextApiRequest, NextApiResponse } from 'next';
import { transporter } from '@/lib/email'; // Adjust this path if necessary

// Ensures this API route runs on the Node.js server runtime (not Edge)
export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, company, message } = req.body;

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
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (err: any) {
    console.error('Error sending email:', err);
    return res.status(500).json({ message: 'Email sending failed', error: err.message });
  }
}