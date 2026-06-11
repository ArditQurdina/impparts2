"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { stripLocaleFromPathname } from "@/lib/i18n";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { detectHeaderTone } from "@/lib/detect-header-tone";
import { useSetHeaderPinned, useSetHeaderTone } from "./HeaderShell";
import type { NavItem } from "@/lib/site-config";

type MainNavProps = {
  brand: { name: string; tagline?: string; href?: string };
  items: NavItem[];
};

/**
 * Primary navigation bar. Pure composition — all data flows in via props.
 */
export function MainNav({ brand, items }: MainNavProps) {
  const pathname = usePathname();
  const setHeaderPinned = useSetHeaderPinned();
  const setHeaderTone = useSetHeaderTone();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [pinned, setPinned] = useState(false);
  const [tone, setTone] = useState<"light" | "dark">("dark");
  const [navHeight, setNavHeight] = useState(0);

  const isRoboticsRoute = (path: string) => {
    const stripped = stripLocaleFromPathname(path || "/");
    return stripped === "/robotics" || stripped.startsWith("/robotics/");
  };

  const isContactUsRoute = (path: string) => {
    const stripped = stripLocaleFromPathname(path || "/");
    return stripped === "/contact-us";
  };

  const displayedItems = isContactUsRoute(pathname)
    ? items.filter((item) => {
        const href = stripLocaleFromPathname(item.href);
        return href === "/" || href === "/robotics" || href === "/contact" || href === "/contact-us";
      })
    : isRoboticsRoute(pathname)
    ? items.filter((item) => {
        const href = stripLocaleFromPathname(item.href);
        return href === "/contact" || href === "/contact-us";
      })
    : items;

  useEffect(() => {
    setHeaderPinned(pinned);
  }, [pinned, setHeaderPinned]);

  useEffect(() => {
    setHeaderTone(tone);
  }, [tone, setHeaderTone]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let frame = 0;

    const updateTone = () => {
      frame = 0;
      setTone(detectHeaderTone(nav));
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateTone);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(nav);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
    };
  }, [pinned]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateHeight = () => setNavHeight(nav.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-0" aria-hidden />
      <nav
        ref={navRef}
        aria-label="Primary"
        className={cn(
          "z-50 w-full backdrop-blur-sm transition-colors duration-300",
          tone === "light"
            ? "bg-white/80 border-b border-zinc-200/60"
            : "bg-black/30",
          pinned ? "fixed top-0 left-0 right-0" : "relative",
        )}
      >
        <Container className="flex h-24 items-center justify-between gap-8">
          <Logo
            name={brand.name}
            tagline={brand.tagline}
            href={brand.href ?? "/"}
          />

          <NavLinks items={displayedItems} />

          <MobileMenu items={displayedItems} />
        </Container>
      </nav>
      {pinned ? (
        <div style={{ height: navHeight }} aria-hidden className="w-full" />
      ) : null}
    </>
  );
}
