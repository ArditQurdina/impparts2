import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { machineryAl } from "./al";
import { machineryDe } from "./de";
import { machineryEn } from "./en";
import type { MachineryMessages } from "./types";

const machineryMessages: Record<LocaleCode, MachineryMessages> = {
  en: machineryEn,
  al: machineryAl,
  de: machineryDe,
};

export function getMachineryMessages(locale: string): MachineryMessages {
  if (isValidLocale(locale)) return machineryMessages[locale];
  return machineryMessages[defaultLocale as LocaleCode];
}

export type {
  MachineryMessages,
  CategoryKey,
  VariantKey,
  LatheKey,
  AuxiliaryKey,
  Spec,
} from "./types";
