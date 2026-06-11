"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { stripLocaleFromPathname } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { useHeaderOffset, useHeaderTone } from "./HeaderShell";
import type { NavItem } from "@/lib/site-config";

type MobileMenuProps = {
  items: NavItem[];
};

function isItemActive(item: NavItem, pathname: string): boolean {
  if (item.external) return false;
  const path = stripLocaleFromPathname(pathname);
  const href = stripLocaleFromPathname(item.href);
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const headerOffset = useHeaderOffset();
  const tone = useHeaderTone();
  const isLight = tone === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const overlay = (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        style={{ top: headerOffset }}
        className={cn(
          "md:hidden fixed inset-x-0 bottom-0 z-40",
          "bg-background border-t border-border",
          "overflow-y-auto transition-[transform,top] duration-500 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Container className="py-8 flex flex-col gap-6">
          <ul className="flex flex-col gap-2 text-sm font-medium uppercase tracking-[0.14em]">
            {items.map((item) => {
              const active = isItemActive(item, pathname);
              const linkClass = cn(
                "inline-flex items-center gap-1 py-3 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
                active
                  ? "text-foreground"
                  : item.external
                    ? "text-subtle hover:text-foreground"
                    : "text-muted hover:text-foreground"
              );

              const label = (
                <span className="relative">
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -bottom-1 left-0 right-0 h-px bg-brand transition-opacity",
                      active ? "opacity-100" : "opacity-0"
                    )}
                  />
                </span>
              );

              if (item.external) {
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                      <span aria-hidden className="text-[10px]">
                        ↗
                      </span>
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={linkClass}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "md:hidden relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md",
          "transition-colors",
          isLight
            ? "text-zinc-900 hover:bg-zinc-100"
            : "text-foreground hover:bg-surface",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isLight
            ? "focus-visible:ring-offset-white"
            : "focus-visible:ring-offset-background"
        )}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
