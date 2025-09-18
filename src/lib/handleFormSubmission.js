'use server'

import { Resend } from 'resend';

export const handleFormSubmit = async (e, request) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = request;
    console.log(body);

    const data = await resend.emails.send({
      from: `Portfolio Contact Form <${process.env.RESEND_ADDRESS_FROM}>`,
      to: `${process.env.RESEND_ADDRESS_TO}`,
      subject: 'New message from portfolio',
      html: `
        <h1>Name: ${body.name}</h1>
        ${body.company ? `<h2>Company: ${body.company}</h2>` : ''}
        <span>Email: ${body.email}</span>
        <p>Message: ${body.message}</p>
      `
    });

    if (data.status === 200) {
      return {
        status: 200,
        body: 'Email sent'
      };
    }
  }
  catch (error) {
    console.error(error);
    console.log('Error sending email');
  }
}
