import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { contactAl } from "./al";
import { contactDe } from "./de";
import { contactEn } from "./en";
import type { ContactMessages } from "./types";

const contactMessages: Record<LocaleCode, ContactMessages> = {
  en: contactEn,
  al: contactAl,
  de: contactDe,
};

export function getContactMessages(locale: string): ContactMessages {
  if (isValidLocale(locale)) return contactMessages[locale];
  return contactMessages[defaultLocale as LocaleCode];
}

export type { ContactMessages, PersonKey, FormFieldCopy } from "./types";
