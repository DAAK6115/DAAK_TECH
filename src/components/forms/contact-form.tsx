"use client";

import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useState,
} from "react";

import {
  ArrowRight,
  CheckCircle2,
  FileUp,
  X,
} from "lucide-react";

import { useSearchParams } from "next/navigation";

import { services } from "@/data/services";
import { serviceUsesBudget } from "@/lib/contact/budget-visibility";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validation/contact";

type Errors = Partial<
  Record<keyof ContactFormData, string>
>;

const MAX_FILE_SIZE =
  4 * 1024 * 1024;

const allowedFileTypes = new Set([
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

const budgets = [
  "Moins de 100 000 FCFA",
  "100 000 – 250 000 FCFA",
  "250 000 – 500 000 FCFA",
  "500 000 – 1 000 000 FCFA",
  "Plus de 1 000 000 FCFA",
  "À définir",
];

const deadlines = [
  "Urgent",
  "Moins de 2 semaines",
  "2 à 4 semaines",
  "1 à 3 mois",
  "Plus de 3 mois",
  "À définir",
];

const initialData: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  deadline: "",
  message: "",
};

export function ContactForm() {
  const searchParams =
    useSearchParams();

  const requestedService =
    searchParams.get("service");

  const initialService =
    requestedService &&
    services.some(
      (service) =>
        service.slug ===
        requestedService
    )
      ? requestedService
      : "";

  const [form, setForm] =
    useState<ContactFormData>(
      () => ({
        ...initialData,
        service: initialService,
      })
    );

  const [errors, setErrors] =
    useState<Errors>({});

  const [file, setFile] =
    useState<File | null>(null);

  /*
   * Honeypot anti-spam.
   * Invisible pour l'utilisateur normal.
   */
  const [website, setWebsite] =
    useState("");

  const [
    submitting,
    setSubmitting,
  ] = useState(false);

  const [
    submitted,
    setSubmitted,
  ] = useState(false);

  const [
    serverError,
    setServerError,
  ] = useState<string | null>(
    null
  );

  function updateField(
    field: keyof ContactFormData,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
      ...(field === "service" && !serviceUsesBudget(value)
        ? { budget: "" }
        : {}),
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    setServerError(null);
  }

  function handleFile(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const selected =
      event.target.files?.[0];

    if (!selected) {
      return;
    }

    setServerError(null);

    if (
      selected.size >
      MAX_FILE_SIZE
    ) {
      setServerError(
        "Le fichier ne doit pas dépasser 4 Mo."
      );

      event.target.value = "";

      return;
    }

    if (
      selected.type &&
      !allowedFileTypes.has(
        selected.type
      )
    ) {
      setServerError(
        "Ce type de fichier n’est pas accepté."
      );

      event.target.value = "";

      return;
    }

    setFile(selected);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setServerError(null);

    const result =
      contactSchema.safeParse(
        form
      );

    if (!result.success) {
      const nextErrors: Errors =
        {};

      for (
        const issue of
        result.error.issues
      ) {
        const field =
          issue.path[0] as
            | keyof ContactFormData
            | undefined;

        if (
          field &&
          !nextErrors[field]
        ) {
          nextErrors[field] =
            issue.message;
        }
      }

      setErrors(nextErrors);

      return;
    }

    setSubmitting(true);

    try {
      /*
       * On garde FormData car nous
       * envoyons éventuellement
       * une pièce jointe.
       */
      const payload =
        new FormData();

      payload.append(
        "name",
        result.data.name
      );

      payload.append(
        "company",
        result.data.company ?? ""
      );

      payload.append(
        "email",
        result.data.email
      );

      payload.append(
        "phone",
        result.data.phone
      );

      payload.append(
        "service",
        result.data.service
      );

      payload.append(
        "budget",
        serviceUsesBudget(result.data.service) ? result.data.budget ?? "" : ""
      );

      payload.append(
        "deadline",
        result.data.deadline ?? ""
      );

      payload.append(
        "message",
        result.data.message
      );

      /*
       * Honeypot
       */
      payload.append(
        "website",
        website
      );

      /*
       * Pièce jointe
       */
      if (file) {
        payload.append(
          "attachment",
          file
        );
      }

      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",
            body: payload,
          }
        );

      const data =
        await response
          .json()
          .catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message ??
            "Impossible d’envoyer la demande."
        );
      }

      setSubmitted(true);

      setForm({
        ...initialData,
        service: initialService,
      });

      setFile(null);
      setWebsite("");
      setErrors({});
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Impossible d’envoyer votre demande pour le moment.";

      setServerError(
        error instanceof TypeError
          ? "Le serveur de contact est momentanément inaccessible. Réessayez dans quelques instants ou contactez DAAK_TECH par WhatsApp au 05 55 01 01 76."
          : message
      );
    } finally {
      setSubmitting(false);
    }
  }

  /*
   * ======================================================
   * CONFIRMATION
   * ======================================================
   */

  if (submitted) {
    return (
      <div
        className="
          rounded-[28px]
          border border-emerald-200
          bg-emerald-50
          p-8 md:p-10
        "
      >
        <div
          className="
            flex size-14
            items-center
            justify-center
            rounded-2xl
            bg-emerald-100
            text-emerald-700
          "
        >
          <CheckCircle2
            size={25}
          />
        </div>

        <h2
          className="
            mt-6
            font-heading
            text-2xl
            font-bold
            text-daak-text
          "
        >
          Votre demande a bien
          été transmise.
        </h2>

        <p
          className="
            mt-4 max-w-xl
            leading-7
            text-slate-600
          "
        >
          Merci de nous avoir
          contactés. L’équipe
          DAAK_TECH prendra
          connaissance de votre
          demande et reviendra
          vers vous dès que
          possible.
        </p>

        {file && (
          <p className="mt-4 text-sm text-slate-500">
            Votre pièce jointe a
            également été
            transmise.
          </p>
        )}

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);

            setServerError(null);
          }}
          className="
            mt-7 font-semibold
            text-daak-blue
            transition
            hover:text-daak-navy
          "
        >
          Envoyer une autre
          demande
        </button>
      </div>
    );
  }

  /*
   * ======================================================
   * FORMULAIRE
   * ======================================================
   */

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="
        relative
        rounded-[28px]
        border border-slate-200
        bg-white
        p-6
        shadow-[0_25px_80px_rgba(10,26,47,.06)]
        sm:p-8
        lg:p-10
      "
    >
      {/* HONEYPOT ANTI-SPAM */}
      <div
        className="
          absolute
          -left-[10000px]
          top-auto
          h-px
          w-px
          overflow-hidden
        "
        aria-hidden="true"
      >
        <label>
          Website

          <input
            type="text"
            name="website"
            value={website}
            onChange={(
              event
            ) =>
              setWebsite(
                event.target.value
              )
            }
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div
        className="
          grid gap-6
          md:grid-cols-2
        "
      >
        {/* NOM */}
        <Field
          label="Nom et prénom"
          required
          error={errors.name}
        >
          <input
            value={form.name}
            onChange={(
              event
            ) =>
              updateField(
                "name",
                event.target.value
              )
            }
            placeholder="Votre nom"
            autoComplete="name"
            className={
              inputClass
            }
          />
        </Field>

        {/* ENTREPRISE */}
        <Field label="Entreprise">
          <input
            value={
              form.company ?? ""
            }
            onChange={(
              event
            ) =>
              updateField(
                "company",
                event.target.value
              )
            }
            placeholder="Nom de l’entreprise"
            autoComplete="organization"
            className={
              inputClass
            }
          />
        </Field>

        {/* EMAIL */}
        <Field
          label="Adresse e-mail"
          required
          error={errors.email}
        >
          <input
            type="email"
            value={form.email}
            onChange={(
              event
            ) =>
              updateField(
                "email",
                event.target.value
              )
            }
            placeholder="vous@entreprise.com"
            autoComplete="email"
            className={
              inputClass
            }
          />
        </Field>

        {/* TÉLÉPHONE */}
        <Field
          label="Téléphone"
          required
          error={errors.phone}
        >
          <input
            type="tel"
            value={form.phone}
            onChange={(
              event
            ) =>
              updateField(
                "phone",
                event.target.value
              )
            }
            placeholder="+225 ..."
            autoComplete="tel"
            className={
              inputClass
            }
          />
        </Field>

        {/* SERVICE */}
        <Field
          label="Service recherché"
          required
          error={errors.service}
        >
          <select
            value={form.service}
            onChange={(
              event
            ) =>
              updateField(
                "service",
                event.target.value
              )
            }
            className={
              inputClass
            }
          >
            <option value="">
              Sélectionner un
              service
            </option>

            {services.map(
              (service) => (
                <option
                  key={
                    service.slug
                  }
                  value={
                    service.slug
                  }
                >
                  {
                    service.title
                  }
                </option>
              )
            )}
          </select>
        </Field>

        {/* BUDGET : seulement pour les prestations qui en ont besoin */}
        {serviceUsesBudget(form.service) && (
          <Field label="Budget indicatif">
          <select
            value={
              form.budget ?? ""
            }
            onChange={(
              event
            ) =>
              updateField(
                "budget",
                event.target.value
              )
            }
            className={
              inputClass
            }
          >
            <option value="">
              Sélectionner
            </option>

            {budgets.map(
              (budget) => (
                <option
                  key={budget}
                  value={budget}
                >
                  {budget}
                </option>
              )
            )}
          </select>
          </Field>
        )}

        {/* DÉLAI */}
        <Field label="Délai souhaité">
          <select
            value={
              form.deadline ??
              ""
            }
            onChange={(
              event
            ) =>
              updateField(
                "deadline",
                event.target.value
              )
            }
            className={
              inputClass
            }
          >
            <option value="">
              Sélectionner
            </option>

            {deadlines.map(
              (deadline) => (
                <option
                  key={
                    deadline
                  }
                  value={
                    deadline
                  }
                >
                  {deadline}
                </option>
              )
            )}
          </select>
        </Field>

        {/* MESSAGE */}
        <div className="md:col-span-2">
          <Field
            label="Décrivez votre besoin"
            required
            error={
              errors.message
            }
          >
            <textarea
              rows={7}
              value={
                form.message
              }
              onChange={(
                event
              ) =>
                updateField(
                  "message",
                  event
                    .target
                    .value
                )
              }
              placeholder="Expliquez-nous votre projet, votre problème ou le résultat que vous souhaitez obtenir..."
              className={`
                ${inputClass}
                min-h-[180px]
                resize-y
                py-4
              `}
            />
          </Field>
        </div>

        {/* PIÈCE JOINTE */}
        <div className="md:col-span-2">
          <label
            className="
              block text-sm
              font-semibold
              text-daak-text
            "
          >
            Pièce jointe

            <span
              className="
                ml-2
                font-normal
                text-slate-400
              "
            >
              optionnelle
            </span>
          </label>

          {!file ? (
            <label
              className="
                mt-3 flex
                cursor-pointer
                items-center
                justify-center
                gap-3
                rounded-[18px]
                border
                border-dashed
                border-slate-300
                bg-daak-light
                px-6 py-8
                text-sm
                text-slate-500
                transition
                hover:border-daak-blue/50
                hover:bg-white
              "
            >
              <FileUp
                size={20}
              />

              <span>
                <span
                  className="
                    block
                    font-semibold
                    text-daak-text
                  "
                >
                  Ajouter un
                  fichier
                </span>

                <span
                  className="
                    mt-1 block
                    text-xs
                    text-slate-400
                  "
                >
                  JPG, PNG,
                  WebP, PDF,
                  Word, Excel ou
                  TXT — 4 Mo
                  maximum
                </span>
              </span>

              <input
                type="file"
                name="attachment"
                accept="
                  .jpg,
                  .jpeg,
                  .png,
                  .webp,
                  .pdf,
                  .doc,
                  .docx,
                  .xls,
                  .xlsx,
                  .txt
                "
                onChange={
                  handleFile
                }
                className="sr-only"
              />
            </label>
          ) : (
            <div
              className="
                mt-3 flex
                items-center
                justify-between
                gap-4
                rounded-[18px]
                border
                border-slate-200
                bg-daak-light
                p-4
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    truncate
                    text-sm
                    font-semibold
                    text-daak-text
                  "
                >
                  {file.name}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-400
                  "
                >
                  {(
                    file.size /
                    1024 /
                    1024
                  ).toFixed(2)}{" "}
                  Mo
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setFile(null)
                }
                aria-label="Retirer le fichier"
                className="
                  flex size-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  text-slate-500
                  transition
                  hover:bg-white
                  hover:text-red-500
                "
              >
                <X size={17} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ERREUR SERVEUR */}
      {serverError && (
        <div
          className="
            mt-6
            rounded-[14px]
            border border-red-200
            bg-red-50
            px-5 py-4
          "
          role="alert"
        >
          <p
            className="
              text-sm
              font-medium
              text-red-700
            "
          >
            {serverError}
          </p>
        </div>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={submitting}
        className="
          group mt-8
          inline-flex h-14
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-daak-blue
          px-7
          font-semibold
          text-daak-navy
          transition
          hover:bg-daak-cyan
          disabled:cursor-not-allowed
          disabled:opacity-60
          sm:w-auto
        "
      >
        {submitting
          ? "Envoi en cours..."
          : "Envoyer ma demande"}

        {!submitting && (
          <ArrowRight
            size={18}
            className="
              transition-transform
              group-hover:translate-x-1
            "
          />
        )}
      </button>
    </form>
  );
}

const inputClass = `
  mt-3
  h-13
  w-full
  rounded-xl
  border
  border-slate-200
  bg-daak-light
  px-4
  text-sm
  text-daak-text
  outline-none
  transition
  placeholder:text-slate-400
  focus:border-daak-blue
  focus:bg-white
  focus:ring-4
  focus:ring-daak-blue/10
`;

type FieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

function Field({
  label,
  required,
  error,
  children,
}: FieldProps) {
  return (
    <label className="block">
      <span
        className="
          text-sm
          font-semibold
          text-daak-text
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-daak-blue">
            *
          </span>
        )}
      </span>

      {children}

      {error && (
        <span
          className="
            mt-2 block
            text-xs
            font-medium
            text-red-600
          "
        >
          {error}
        </span>
      )}
    </label>
  );
}