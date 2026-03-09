import { z } from 'zod';

// === Website Forms ===

export const auditRequestSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben').max(100),
  company: z.string().min(2, 'Unternehmen muss mindestens 2 Zeichen haben').max(100),
  storeCount: z.string().min(1, 'Bitte Store-Anzahl angeben'),
  challenge: z.string().min(10, 'Bitte beschreiben Sie Ihre Herausforderung (min. 10 Zeichen)').max(1000),
  email: z.string().email('Bitte geben Sie eine gueltige E-Mail-Adresse ein'),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben').max(100),
  email: z.string().email('Bitte geben Sie eine gueltige E-Mail-Adresse ein'),
  company: z.string().max(100).optional(),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen haben').max(2000),
});

export type AuditRequestInput = z.infer<typeof auditRequestSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;
