import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { ctaAl } from "./al";
import { ctaDe } from "./de";
import { ctaEn } from "./en";
import type { CtaMessages } from "./types";

const ctaMessages: Record<LocaleCode, CtaMessages> = {
  en: ctaEn,
  al: ctaAl,
  de: ctaDe,
};

export function getCtaMessages(locale: string): CtaMessages {
  if (isValidLocale(locale)) return ctaMessages[locale];
  return ctaMessages[defaultLocale as LocaleCode];
}

export type { CtaMessages } from "./types";
