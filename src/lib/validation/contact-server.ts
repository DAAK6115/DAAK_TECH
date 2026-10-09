import { z } from "zod";

import { services } from "@/data/services";

const serviceSlugs =
  services.map(
    (service) =>
      service.slug
  );

export const contactServerSchema =
  z.object({
    name: z
      .string()
      .trim()
      .min(
        2,
        "Nom invalide."
      )
      .max(
        120,
        "Nom trop long."
      ),

    company: z
      .string()
      .trim()
      .max(
        120,
        "Nom d’entreprise trop long."
      )
      .optional(),

    email: z
      .string()
      .trim()
      .email(
        "Adresse e-mail invalide."
      )
      .max(200),

    phone: z
      .string()
      .trim()
      .min(
        8,
        "Numéro de téléphone invalide."
      )
      .max(40),

    service: z
      .string()
      .refine(
        (value) =>
          serviceSlugs.includes(
            value
          ),
        "Service invalide."
      ),

    budget: z
      .string()
      .trim()
      .max(100)
      .optional(),

    deadline: z
      .string()
      .trim()
      .max(100)
      .optional(),

    message: z
      .string()
      .trim()
      .min(
        20,
        "La description est trop courte."
      )
      .max(
        3000,
        "La description est trop longue."
      ),

    website: z
      .string()
      .max(0)
      .optional(),
  });

export type ContactServerData =
  z.infer<
    typeof contactServerSchema
  >;