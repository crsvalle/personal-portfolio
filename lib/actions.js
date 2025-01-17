'use server'

import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data) {
  const result = ContactFormSchema.safeParse(data);
  console.log(result)

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;

    if (!email) {
      throw new Error('Email is missing or undefined');
    }

    const response = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: [email],
      cc: ['cristianvalle@pursuit.org'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
    });


    return { success: true };
  } catch (error) {
    console.error('Error while sending email:', error);
    return { error };
  }
}
