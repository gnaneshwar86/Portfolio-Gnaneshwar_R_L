import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // ──────── EMAIL SERVICE INTEGRATION ────────
    // You can easily connect this to Resend, SendGrid, or any other service.
    // Example with Resend (highly recommended for Next.js):
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Contact Form <onboarding@resend.dev>',
    //   to: 'gnaneshwarnani8605@gmail.com',
    //   subject: `New Message: ${subject}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    // });

    console.log("New Contact Form Submission:", { name, email, subject, message });

    // Simulate success
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
