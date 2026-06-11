import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import type { NavItem } from "@/lib/site-config";
import { footerAl } from "./al";
import { footerDe } from "./de";
import { footerEn } from "./en";
import type { FooterMessages } from "./types";

const footerMessages: Record<LocaleCode, FooterMessages> = {
  en: footerEn,
  al: footerAl,
  de: footerDe,
};

export function getFooterMessages(locale: string): FooterMessages {
  if (isValidLocale(locale)) return footerMessages[locale];
  return footerMessages[defaultLocale as LocaleCode];
}

const FOOTER_HREF_LABEL_KEY: Record<
  string,
  keyof FooterMessages["footerNav"] | undefined
> = {
  "/industries": "industries",
  "/machinery": "machinery",
  "/about": "aboutUs",
};

export function translateFooterNavItems(
  items: NavItem[],
  messages: FooterMessages
): NavItem[] {
  return items.map((item) => {
    const key = FOOTER_HREF_LABEL_KEY[item.href];
    if (!key) return item;
    return { ...item, label: messages.footerNav[key] };
  });
}

export function formatCopyright(template: string, year: number): string {
  return template.replace("{year}", String(year));
}

export type { FooterMessages } from "./types";
