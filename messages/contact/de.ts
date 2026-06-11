import type { ContactMessages } from "./types";

export const contactDe: ContactMessages = {
  hero: {
    eyebrow: "Kontaktieren Sie uns",
    titleContact: "Kontakt",
    titleBrand: "IMP.",
    intro:
      "Binden Sie uns früh in Ihren Designprozess ein — für kosteneffiziente, qualitativ hochwertige Produktion, zugeschnitten auf Ihre technischen Anforderungen.",
  },
  form: {
    heading: "Direkte Anfrage",
    name: { label: "Name", placeholder: "Vollständigen Namen eingeben" },
    email: {
      label: "E-Mail-Adresse",
      placeholder: "name@beispiel.de",
    },
    phone: { label: "Telefon", placeholder: "+000 00 000 000" },
    message: {
      label: "Ihre Nachricht",
      placeholder: "Beschreiben Sie Ihre Projektanforderungen\u2026",
    },
    submit: "Anfrage senden",
    submitting: "Wird gesendet\u2026",
    success:
      "Vielen Dank — Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.",
    error:
      "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.",
  },
  personnel: {
    heading: "Technisches Team",
    people: [
      { key: "albert", role: "Inhaber & Technischer Leiter" },
      { key: "rroni", role: "Finanzmanager" },
    ],
  },
};
