import { siteConfig } from "@/lib/site-config";

/** Header set by middleware so server components can read the active locale. */
export const LOCALE_HEADER = "x-locale";

export const locales = siteConfig.locales.map((l) => l.code);
export const defaultLocale = siteConfig.defaultLocale;

export type LocaleCode = (typeof locales)[number];

export function isValidLocale(locale: string): locale is LocaleCode {
  return (locales as string[]).includes(locale);
}

export function isLocalizablePath(path: string): boolean {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return false;
  }
  // Static assets (e.g. /capabilities.pdf) stay at the site root.
  const basename = path.split("/").pop() ?? "";
  if (basename.includes(".")) return false;
  return true;
}

export function getLocaleFromPathname(pathname: string): LocaleCode | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isValidLocale(segment)) return segment;
  return null;
}

export function stripLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname || "/";
  const withoutPrefix = pathname.slice(`/${locale}`.length) || "/";
  return withoutPrefix.startsWith("/") ? withoutPrefix : `/${withoutPrefix}`;
}

export function localizePath(path: string, locale: string): string {
  if (!isLocalizablePath(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function switchLocalePath(pathname: string, locale: string): string {
  return localizePath(stripLocaleFromPathname(pathname), locale);
}
