import path from "node:path";

import {
  NextResponse,
} from "next/server";

import {
  sendContactEmails,
} from "@/lib/email/contact-email";

import {
  contactServerSchema,
} from "@/lib/validation/contact-server";

export const runtime =
  "nodejs";

const MAX_FILE_SIZE =
  4 * 1024 * 1024;

const allowedExtensions =
  new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".txt",
  ]);

const allowedMimeTypes =
  new Set([
    "image/jpeg",
    "image/png",
    "image/webp",

    "application/pdf",

    "application/msword",

    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

    "application/vnd.ms-excel",

    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

    "text/plain",
  ]);

function getString(
  formData: FormData,
  key: string
) {
  const value =
    formData.get(key);

  if (
    typeof value !==
    "string"
  ) {
    return "";
  }

  return value;
}

function getOptionalString(
  formData: FormData,
  key: string
) {
  const value =
    getString(
      formData,
      key
    ).trim();

  return value.length > 0
    ? value
    : undefined;
}

function sanitizeFilename(
  filename: string
) {
  return filename
    .replace(
      /[^\w.\- ()À-ÿ]/g,
      "_"
    )
    .slice(0, 180);
}

export async function POST(
  request: Request
) {
  try {
    /*
     * ====================================================
     * CONTENT TYPE
     * ====================================================
     */

    const contentType =
      request.headers.get(
        "content-type"
      );

    if (
      !contentType?.includes(
        "multipart/form-data"
      )
    ) {
      return NextResponse.json(
        {
          ok: false,

          message:
            "Format de requête invalide.",
        },
        {
          status: 415,
        }
      );
    }

    /*
     * ====================================================
     * FORM DATA
     * ====================================================
     */

    const formData =
      await request.formData();

    /*
     * ====================================================
     * HONEYPOT
     * ====================================================
     */

    const website =
      getString(
        formData,
        "website"
      );

    if (
      website.length > 0
    ) {
      /*
       * On fait croire au bot
       * que tout s'est bien
       * passé.
       */
      return NextResponse.json(
        {
          ok: true,
        },
        {
          status: 200,
        }
      );
    }

    /*
     * ====================================================
     * DONNÉES
     * ====================================================
     */

    const raw = {
      name:
        getString(
          formData,
          "name"
        ),

      company:
        getOptionalString(
          formData,
          "company"
        ),

      email:
        getString(
          formData,
          "email"
        ),

      phone:
        getString(
          formData,
          "phone"
        ),

      service:
        getString(
          formData,
          "service"
        ),

      budget:
        getOptionalString(
          formData,
          "budget"
        ),

      deadline:
        getOptionalString(
          formData,
          "deadline"
        ),

      message:
        getString(
          formData,
          "message"
        ),

      website: "",
    };

    const validation =
      contactServerSchema.safeParse(
        raw
      );

    if (
      !validation.success
    ) {
      return NextResponse.json(
        {
          ok: false,

          message:
            "Certaines informations sont invalides.",

          errors:
            validation.error
              .flatten()
              .fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    /*
     * ====================================================
     * PIÈCE JOINTE
     * ====================================================
     */

    const fileValue =
      formData.get(
        "attachment"
      );

    let attachment:
  | {
      filename: string;
      content: string;
      contentType?: string;
    }
  | undefined;

    if (
      fileValue
        instanceof File &&
      fileValue.size > 0
    ) {
      /*
       * ---------------------------
       * Taille
       * ---------------------------
       */

      if (
        fileValue.size >
        MAX_FILE_SIZE
      ) {
        return NextResponse.json(
          {
            ok: false,

            message:
              "La pièce jointe ne doit pas dépasser 4 Mo.",
          },
          {
            status: 400,
          }
        );
      }

      /*
       * ---------------------------
       * Extension
       * ---------------------------
       */

      const extension =
        path
          .extname(
            fileValue.name
          )
          .toLowerCase();

      if (
        !allowedExtensions.has(
          extension
        )
      ) {
        return NextResponse.json(
          {
            ok: false,

            message:
              "Ce type de fichier n’est pas accepté.",
          },
          {
            status: 400,
          }
        );
      }

      /*
       * ---------------------------
       * MIME
       * ---------------------------
       */

      if (
        fileValue.type &&
        !allowedMimeTypes.has(
          fileValue.type
        )
      ) {
        return NextResponse.json(
          {
            ok: false,

            message:
              "Le format de la pièce jointe n’est pas autorisé.",
          },
          {
            status: 400,
          }
        );
      }

      /*
       * ---------------------------
       * Conversion Base64
       * ---------------------------
       */

      const arrayBuffer =
  await fileValue.arrayBuffer();

const content =
  Buffer
    .from(arrayBuffer)
    .toString("base64");

attachment = {
  filename:
    sanitizeFilename(
      fileValue.name
    ),

  content,

  contentType:
    fileValue.type ||
    undefined,
};
    }

    /*
     * ====================================================
     * ENVOI EMAIL
     * ====================================================
     */

    await sendContactEmails({
      name:
        validation
          .data.name,

      company:
        validation
          .data.company,

      email:
        validation
          .data.email,

      phone:
        validation
          .data.phone,

      service:
        validation
          .data.service,

      budget:
        validation
          .data.budget,

      deadline:
        validation
          .data.deadline,

      message:
        validation
          .data.message,

      attachment,
    });

    /*
     * ====================================================
     * SUCCÈS
     * ====================================================
     */

    return NextResponse.json(
      {
        ok: true,

        message:
          "Votre demande a bien été envoyée.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "CONTACT_API_ERROR",
      error
    );

    return NextResponse.json(
      {
        ok: false,

        message:
          "Impossible d’envoyer votre demande pour le moment.",
      },
      {
        status: 500,
      }
    );
  }
}