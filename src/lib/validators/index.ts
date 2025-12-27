import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .trim()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(50, {
      message: 'Name must not be longer than 50 characters.',
    })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: 'Name can only contain letters, spaces, hyphens, and apostrophes.',
    }),
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .trim()
    .min(1, {
      message: 'Email is required.',
    })
    .email({
      message: 'Please enter a valid email address.',
    })
    .toLowerCase()
    .max(100, {
      message: 'Email must not be longer than 100 characters.',
    }),
  message: z
    .string({
      required_error: 'Message is required.',
    })
    .trim()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(500, {
      message: 'Message must not be longer than 500 characters.',
    }),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

export const ContactActionSchema = ContactFormSchema;

export type ContactAction = z.infer<typeof ContactActionSchema>;
