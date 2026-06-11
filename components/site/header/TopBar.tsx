"use client";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ContactLinks } from "./ContactLinks";
import { useHeaderScrolled, useHeaderTone } from "./HeaderShell";
import type { ContactChannel, Locale } from "@/lib/site-config";

type TopBarProps = {
  locales: Locale[];
  contact: ContactChannel[];
};

/** Slim utility bar above the main navigation (frosted glass via parent header). */
export function TopBar({ locales, contact }: TopBarProps) {
  const scrolled = useHeaderScrolled();
  const tone = useHeaderTone();
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "overflow-hidden border-b transition-all duration-500 ease-out",
        isLight ? "border-zinc-200/60" : "border-border/40",
        scrolled
          ? "max-h-0 opacity-0 pointer-events-none border-transparent"
          : "max-h-12 opacity-100"
      )}
    >
      <Container className="flex h-9 items-center justify-between">
        <LanguageSwitcher locales={locales} />
        <ContactLinks channels={contact} />
      </Container>
    </div>
  );
}
