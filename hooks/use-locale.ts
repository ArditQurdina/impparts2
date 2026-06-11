"use client";

import { usePathname } from "next/navigation";
import {
  defaultLocale,
  getLocaleFromPathname,
  localizePath,
  type LocaleCode,
} from "@/lib/i18n";

export function useLocale(): LocaleCode {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname) ?? (defaultLocale as LocaleCode);
}

export function useLocalizedPath(path: string): string {
  const locale = useLocale();
  return localizePath(path, locale);
}
