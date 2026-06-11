import Image from "next/image";
import type { ExpertiseKey, SolutionKey } from "@/messages/robotics";

export const EXPERTISE_IMAGES: Record<ExpertiseKey, string> = {
  design: "/images/core1.svg",
  manufacturing: "/images/core3.svg",
  quality: "/images/core2.svg",
};

export const EXPERTISE_IMAGE_ALT: Record<ExpertiseKey, string> = {
  design: "Engineer reviewing a prototype design",
  manufacturing: "CNC precision manufacturing",
  quality: "Precision quality inspection",
};

export const SOLUTION_ICONS: Record<SolutionKey, string> = {
  welding: "/images/welding.svg",
  handling: "/images/material.svg",
  assembly: "/images/assembly.svg",
  inspection: "/images/quality.svg",
  integration: "/images/production.svg",
  safety: "/images/safety.svg",
};

export const EXPERTISE_ICONS: Record<ExpertiseKey, string> = {
  design: "/images/assembly.svg",
  manufacturing: "/images/production.svg",
  quality: "/images/quality.svg",
};

export const IMPACT_VIDEO_POSTER = "/images/hero.svg";

export const PARTNER_LOGOS = {
  investor: {
    src: "/images/rronifer.svg",
    alt: "Rronifer Group",
    width: 177,
    height: 39,
  },
  crobotp: {
    src: "/images/crop.svg",
    alt: "CROBOTP",
    width: 212,
    height: 28,
  },
  oem: [
    { src: "/images/fanuc.svg", alt: "FANUC", width: 161, height: 28 },
    { src: "/images/kuka.svg", alt: "KUKA", width: 120, height: 28 },
    { src: "/images/yasaka.svg", alt: "YASKAWA", width: 175, height: 27 },
  ],
} as const;

export const STAT_ICONS = [
  "/images/robot.svg",
  "/images/costumer.svg",
  "/images/improvement.svg",
  "/images/automations.svg",
] as const;

const SOLUTION_ICON_SIZE = 52;
const EXPERTISE_ICON_SIZE = 52;

export function SolutionIcon({
  type,
  className = "h-8 w-8",
}: {
  type: SolutionKey;
  className?: string;
}) {
  return (
    <Image
      src={SOLUTION_ICONS[type]}
      alt=""
      width={SOLUTION_ICON_SIZE}
      height={SOLUTION_ICON_SIZE}
      className={className}
      aria-hidden
    />
  );
}

export function ExpertiseIcon({
  type,
  className = "h-8 w-8",
}: {
  type: ExpertiseKey;
  className?: string;
}) {
  return (
    <Image
      src={EXPERTISE_ICONS[type]}
      alt=""
      width={EXPERTISE_ICON_SIZE}
      height={EXPERTISE_ICON_SIZE}
      className={className}
      aria-hidden
    />
  );
}
