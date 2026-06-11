import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { homeAl } from "./al";
import { homeDe } from "./de";
import { homeEn } from "./en";
import type { HomeMessages } from "./types";

const homeMessages: Record<LocaleCode, HomeMessages> = {
  en: homeEn,
  al: homeAl,
  de: homeDe,
};

export function getHomeMessages(locale: string): HomeMessages {
  if (isValidLocale(locale)) return homeMessages[locale];
  return homeMessages[defaultLocale as LocaleCode];
}

export type { HomeMessages, AdvantagePanel, ExpertiseCard } from "./types";
