'use server';
import 'server-only';

import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/contact-template';

import { actionClient } from '@/lib/safe-action';
import { ContactActionSchema } from '@/lib/validators';
import { logger } from '@/lib/logger';
import { env } from '@/lib/env';

// Validate environment variables on module load
if (typeof window === 'undefined' && env.isProduction) {
  if (!env.EMAIL_TO || !env.RESEND_API_KEY) {
    throw new Error('Missing required environment variables for email functionality');
  }
}

export const contactSubmit = actionClient
  .schema(ContactActionSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    const resend = new Resend(env.RESEND_API_KEY);

    if (!email) {
      throw new Error('Email address is required');
    }
    
    if (!env.EMAIL_TO) {
      logger.error('EMAIL_TO environment variable is not set');
      throw new Error('Server configuration error. Please contact the administrator.');
    }

    const subject = `Message from ${name} (${email}) on Portfolio`;

    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: env.EMAIL_TO,
        subject,
        react: ContactEmail({ name, email, message }),
        replyTo: email
      });

      if (error) {
        logger.error('Resend error:', error);
        throw new Error('Failed to send email. Please try again later.');
      }

      logger.info('Contact form submitted successfully:', { name, email });

      return {
        success: 'Thank you for reaching out! Your message has been sent.'
      };
    } catch (error) {
      logger.error('Contact form submission error:', error);
      throw error;
    }
  });
