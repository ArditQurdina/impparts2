import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { roboticsAl } from "./al";
import { roboticsDe } from "./de";
import { roboticsEn } from "./en";
import type { RoboticsMessages } from "./types";

const roboticsMessages: Record<LocaleCode, RoboticsMessages> = {
  en: roboticsEn,
  al: roboticsAl,
  de: roboticsDe,
};

export function getRoboticsMessages(locale: string): RoboticsMessages {
  if (isValidLocale(locale)) return roboticsMessages[locale];
  return roboticsMessages[defaultLocale as LocaleCode];
}

export type {
  RoboticsMessages,
  SolutionKey,
  ExpertiseKey,
} from "./types";
