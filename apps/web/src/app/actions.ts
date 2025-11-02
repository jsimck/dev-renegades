'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return {
      success: false,
      error: 'Missing required fields',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: 'Please enter a valid email address',
    };
  }

  try {
    const emailContent = `
New contact form submission from dev renegades website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
    `.trim();

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'simecekjann@gmail.com',
      subject: `New Contact from ${name}`,
      text: emailContent,
    });

    return {
      success: true,
      message: "Thanks for reaching out! We'll get back to you soon.",
    };
  } catch (error) {
    console.error('Error sending email:', error);

    return {
      success: false,
      error: 'Failed to send message. Please try again later.',
    };
  }
}
