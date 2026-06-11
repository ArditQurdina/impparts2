"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { stripLocaleFromPathname } from "@/lib/i18n";

type LogoProps = {
  name: string;
  tagline?: string;
  href?: string;
  className?: string;
};

const DEFAULT_LOGO = {
  src: "/images/originalImpLogo.svg",
  width: 100,
  height: 36,
  className: "h-16 w-auto",
} as const;

const ROBOTICS_LOGO = {
  src: "/images/impRobotics.svg",
  width: 100,
  height: 36,
  className: "h-20 w-auto",
} as const;

function isRoboticsRoute(pathname: string): boolean {
  const path = stripLocaleFromPathname(pathname);
  return (
    path === "/robotics" ||
    path.startsWith("/robotics/") ||
    path === "/contact-us"
  );
}

export function Logo({ name, href = "/", className }: LogoProps) {
  const pathname = usePathname();
  const logo = isRoboticsRoute(pathname) ? ROBOTICS_LOGO : DEFAULT_LOGO;

  return (
    <Link
      href={href}
      aria-label={`${name} — home`}
      className={cn(
        "group inline-flex items-center select-none transition-opacity hover:opacity-80",
        className
      )}
    >
      <Image
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={name}
        priority
        className={logo.className}
      />
    </Link>
  );
}
