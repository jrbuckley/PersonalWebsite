import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message, recaptchaToken } = data;

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${import.meta.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ error: 'Invalid reCAPTCHA' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send email using SendGrid
    const msg = {
      to: import.meta.env.CONTACT_EMAIL, // Your email address
      from: import.meta.env.SENDGRID_FROM_EMAIL, // Verified sender email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}; 