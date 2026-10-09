import { Resend } from "resend";

import { services } from "@/data/services";

type EmailAttachment = {
  filename: string;
  content: string;
  contentType?: string;
};

type ContactEmailData = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  deadline?: string;
  message: string;
  attachment?: EmailAttachment;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getServiceName(slug: string) {
  return (
    services.find(
      (service) => service.slug === slug
    )?.title ?? slug
  );
}

export async function sendContactEmails(
  data: ContactEmailData
) {
  const apiKey =
    process.env.RESEND_API_KEY;

  const from =
    process.env.EMAIL_FROM;

  const contactEmail =
    process.env.CONTACT_EMAIL;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY_MISSING"
    );
  }

  if (!from || !contactEmail) {
    throw new Error(
      "EMAIL_CONFIGURATION_MISSING"
    );
  }

  const resend =
    new Resend(apiKey);

  const serviceName =
    getServiceName(
      data.service
    );

  /*
   * ======================================================
   * E-MAIL POUR DAAK_TECH
   * ======================================================
   */

  const internalResult =
    await resend.emails.send({
      from,

      to: [contactEmail],

      replyTo: data.email,

      subject:
        `Nouvelle demande — ${serviceName}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 680px;
            margin: 0 auto;
            color: #0B1220;
          "
        >
          <div
            style="
              background: #0A1A2F;
              padding: 28px;
              border-radius: 16px 16px 0 0;
            "
          >
            <h1
              style="
                margin: 0;
                color: #ffffff;
                font-size: 24px;
              "
            >
              Nouvelle demande DAAK_TECH
            </h1>

            <p
              style="
                margin: 8px 0 0;
                color: #25F4EE;
              "
            >
              ${escapeHtml(serviceName)}
            </p>
          </div>

          <div
            style="
              border: 1px solid #E2E8F0;
              border-top: none;
              padding: 28px;
              border-radius: 0 0 16px 16px;
            "
          >
            <p>
              <strong>Nom :</strong>
              ${escapeHtml(data.name)}
            </p>

            <p>
              <strong>Entreprise :</strong>
              ${escapeHtml(
                data.company ||
                "Non renseignée"
              )}
            </p>

            <p>
              <strong>E-mail :</strong>
              ${escapeHtml(data.email)}
            </p>

            <p>
              <strong>Téléphone :</strong>
              ${escapeHtml(data.phone)}
            </p>

            <p>
              <strong>Service :</strong>
              ${escapeHtml(serviceName)}
            </p>

            <p>
              <strong>Budget :</strong>
              ${escapeHtml(
                data.budget ||
                "Non renseigné"
              )}
            </p>

            <p>
              <strong>Délai :</strong>
              ${escapeHtml(
                data.deadline ||
                "Non renseigné"
              )}
            </p>

            <p>
              <strong>Pièce jointe :</strong>
              ${
                data.attachment
                  ? escapeHtml(
                      data.attachment
                        .filename
                    )
                  : "Aucune"
              }
            </p>

            <hr
              style="
                border: none;
                border-top: 1px solid #E2E8F0;
                margin: 24px 0;
              "
            />

            <p>
              <strong>Description :</strong>
            </p>

            <p
              style="
                line-height: 1.7;
                white-space: pre-wrap;
              "
            >${escapeHtml(
              data.message
            )}</p>
          </div>
        </div>
      `,

      attachments:
        data.attachment
          ? [
              {
                filename:
                  data.attachment
                    .filename,

                content:
                  data.attachment
                    .content,

                contentType:
                  data.attachment
                    .contentType,
              },
            ]
          : undefined,
    });

  if (internalResult.error) {
    throw new Error(
      internalResult.error.message
    );
  }

  /*
   * ======================================================
   * CONFIRMATION CLIENT
   * ======================================================
   */

  const clientResult =
    await resend.emails.send({
      from,

      to: [data.email],

      replyTo: contactEmail,

      subject:
        "Nous avons bien reçu votre demande — DAAK_TECH",

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 640px;
            margin: 0 auto;
            color: #0B1220;
          "
        >
          <div
            style="
              background: #0A1A2F;
              padding: 30px;
              border-radius: 16px 16px 0 0;
            "
          >
            <h1
              style="
                margin: 0;
                color: #ffffff;
                font-size: 24px;
              "
            >
              DAAK_TECH
            </h1>

            <p
              style="
                margin: 8px 0 0;
                color: #25F4EE;
              "
            >
              Votre demande a bien été reçue.
            </p>
          </div>

          <div
            style="
              padding: 30px;
              border: 1px solid #E2E8F0;
              border-top: none;
              border-radius: 0 0 16px 16px;
            "
          >
            <p>
              Bonjour ${escapeHtml(data.name)},
            </p>

            <p
              style="
                line-height: 1.7;
              "
            >
              Merci d’avoir contacté DAAK_TECH.
              Nous avons bien reçu votre demande concernant :
            </p>

            <p
              style="
                padding: 16px;
                background: #F6F8FB;
                border-radius: 10px;
                font-weight: bold;
              "
            >
              ${escapeHtml(serviceName)}
            </p>

            ${
              data.attachment
                ? `
                  <p
                    style="
                      line-height: 1.7;
                    "
                  >
                    Votre pièce jointe
                    <strong>
                      ${escapeHtml(
                        data.attachment
                          .filename
                      )}
                    </strong>
                    a également été reçue.
                  </p>
                `
                : ""
            }

            <p
              style="
                line-height: 1.7;
              "
            >
              Notre équipe prendra connaissance
              de votre besoin et reviendra vers vous
              dès que possible.
            </p>

            <p
              style="
                margin-top: 28px;
                line-height: 1.7;
              "
            >
              Cordialement,
              <br />

              <strong>
                L’équipe DAAK_TECH
              </strong>
            </p>

            <p
              style="
                margin-top: 26px;
                color: #64748B;
                font-size: 13px;
              "
            >
              Innover pour transformer,
              personnaliser pour exceller.
            </p>
          </div>
        </div>
      `,
    });

  if (clientResult.error) {
    console.error(
      "CLIENT_CONFIRMATION_EMAIL_ERROR",
      clientResult.error
    );
  }
}