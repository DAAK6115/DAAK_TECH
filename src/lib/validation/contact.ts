import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Indiquez votre nom et prénom.")
    .max(120, "Le nom est trop long."),

  company: z
    .string()
    .trim()
    .max(120, "Le nom de l’entreprise est trop long.")
    .optional(),

  email: z
    .string()
    .trim()
    .email("Indiquez une adresse e-mail valide.")
    .max(200, "L’adresse e-mail est trop longue."),

  phone: z
    .string()
    .trim()
    .min(8, "Indiquez un numéro de téléphone valide.")
    .max(40, "Le numéro de téléphone est trop long."),

  service: z
    .string()
    .min(1, "Sélectionnez un service."),

  budget: z
    .string()
    .optional(),

  deadline: z
    .string()
    .optional(),

  message: z
    .string()
    .trim()
    .min(
      20,
      "Décrivez votre besoin avec au moins 20 caractères."
    )
    .max(
      3000,
      "Votre message est trop long."
    ),
});

export type ContactFormData =
  z.infer<typeof contactSchema>;