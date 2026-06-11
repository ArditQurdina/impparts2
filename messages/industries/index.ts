import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { industriesAl } from "./al";
import { industriesDe } from "./de";
import { industriesEn } from "./en";
import type { IndustriesMessages } from "./types";

const industriesMessages: Record<LocaleCode, IndustriesMessages> = {
  en: industriesEn,
  al: industriesAl,
  de: industriesDe,
};

export function getIndustriesMessages(locale: string): IndustriesMessages {
  if (isValidLocale(locale)) return industriesMessages[locale];
  return industriesMessages[defaultLocale as LocaleCode];
}

export type { IndustriesMessages, IndustryItem, DomainItem } from "./types";
