'use server'

import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;

    if (!email) {
      throw new Error('Email is missing or undefined');
    }

    const response = await resend.emails.send({
      from: 'email@crsvalle.com',
      to: [email],
      cc: ['email@crsvalle.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
    });


    return { success: true };
  } catch (error) {
    return { error };
  }
}
