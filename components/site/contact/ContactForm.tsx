"use client";

import * as React from "react";
import type { ContactMessages } from "@/messages/contact";
import { siteConfig } from "@/lib/site-config";

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL: Fields = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const IMP_EMAIL =
  siteConfig.contact.find((c) => c.kind === "email")?.value ??
  "rr.kameri@impparts.com";

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(IMP_EMAIL)}`;

type ContactFormProps = {
  content: ContactMessages["form"];
};

export function ContactForm({ content }: ContactFormProps) {
  const [values, setValues] = React.useState<Fields>(INITIAL);
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || "—",
          message: values.message,
          _subject: "New enquiry from IMP website",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed");
      }

      setValues(INITIAL);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
        {content.heading}
      </p>

      <FormField
        label={content.name.label}
        name="name"
        type="text"
        placeholder={content.name.placeholder}
        value={values.name}
        onChange={handleChange}
        required
        disabled={submitting}
      />

      <FormField
        label={content.email.label}
        name="email"
        type="email"
        placeholder={content.email.placeholder}
        value={values.email}
        onChange={handleChange}
        required
        disabled={submitting}
      />

      <FormField
        label={content.phone.label}
        name="phone"
        type="tel"
        placeholder={content.phone.placeholder}
        value={values.phone}
        onChange={handleChange}
        disabled={submitting}
      />

      <FormField
        label={content.message.label}
        name="message"
        type="textarea"
        placeholder={content.message.placeholder}
        value={values.message}
        onChange={handleChange}
        required
        disabled={submitting}
      />

      {status === "success" ? (
        <p className="text-sm text-foreground" role="status">
          {content.success}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-brand" role="alert">
          {content.error}
        </p>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-3 bg-brand px-6 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-white transition-colors hover:bg-brand/85 disabled:opacity-60"
        >
          {submitting ? content.submitting : content.submit}
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  name: keyof Fields;
  type: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  disabled?: boolean;
};

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  disabled,
}: FormFieldProps) {
  const fieldId = `field-${name}`;
  const sharedClass =
    "w-full bg-transparent border-b border-border-strong/40 pb-3 pt-1 " +
    "text-base text-foreground placeholder:text-muted/60 " +
    "focus:outline-none focus:border-brand transition-colors " +
    "disabled:opacity-60";

  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={fieldId}
        className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`${sharedClass} resize-none leading-relaxed`}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={sharedClass}
        />
      )}
    </div>
  );
}
