"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { stripLocaleFromPathname } from "@/lib/i18n";
import { useHeaderTone } from "./HeaderShell";
import type { NavItem } from "@/lib/site-config";

type NavLinksProps = {
  items: NavItem[];
  className?: string;
};

function isItemActive(item: NavItem, pathname: string): boolean {
  if (item.external) return false;
  const path = stripLocaleFromPathname(pathname);
  const href = stripLocaleFromPathname(item.href);
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function NavLinks({ items, className }: NavLinksProps) {
  const pathname = usePathname();
  const tone = useHeaderTone();
  const isLight = tone === "light";

  return (
    <ul
      className={cn(
        "hidden md:flex items-center gap-8 text-[13px] font-medium uppercase tracking-[0.14em]",
        className
      )}
    >
      {items.map((item) => {
        const active = isItemActive(item, pathname);
        const linkClass = cn(
          "relative inline-flex items-center justify-start gap-1 py-1 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
          isLight
            ? "focus-visible:ring-offset-white"
            : "focus-visible:ring-offset-background",
          isLight
            ? active
              ? "text-zinc-900"
              : "text-zinc-500 hover:text-zinc-900"
            : active
              ? "text-foreground"
              : item.external
                ? "text-subtle hover:text-foreground"
                : "text-muted hover:text-foreground"
        );

        const content = (
          <>
            {item.label}
            {item.external ? (
              <span aria-hidden className="text-[10px]">
                ↗
              </span>
            ) : null}
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute -bottom-1 left-0 right-0 h-px bg-brand transition-opacity",
                active ? "opacity-100" : "opacity-0"
              )}
            />
          </>
        );

        return (
          <li key={item.href}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {content}
              </a>
            ) : (
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={linkClass}
              >
                {content}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
