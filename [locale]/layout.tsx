import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return siteConfig.locales.map(({ code }) => ({ locale: code }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return children;
}
