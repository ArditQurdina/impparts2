import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { aboutAl } from "./al";
import { aboutDe } from "./de";
import { aboutEn } from "./en";
import type { AboutMessages } from "./types";

const aboutMessages: Record<LocaleCode, AboutMessages> = {
  en: aboutEn,
  al: aboutAl,
  de: aboutDe,
};

export function getAboutMessages(locale: string): AboutMessages {
  if (isValidLocale(locale)) return aboutMessages[locale];
  return aboutMessages[defaultLocale as LocaleCode];
}

export type { AboutMessages, PillarKey } from "./types";
