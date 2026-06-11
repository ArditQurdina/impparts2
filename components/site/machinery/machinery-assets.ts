import type {
  AuxiliaryKey,
  CategoryKey,
  LatheKey,
  VariantKey,
} from "@/messages/machinery";

/** Machine category labels — never localized. */
export const CATEGORY_NAV_NAMES: Record<CategoryKey, string> = {
  verticalMills: "Vertical Mills",
  lathes: "Lathes",
  laserCutting: "Laser Cutting",
  bending: "Bending",
  measuring: "Measuring",
};

export const VERTICAL_MILLS_SECTION = {
  titleLine1: "Vertical",
  titleLine2: "Mills",
} as const;

export const LATHES_SECTION = {
  titleLine1: "CNC",
  titleLine2: "Lathes",
} as const;

export const AUXILIARY_SECTION = {
  titleLine1: "Auxiliary",
  titleLine2: "Machines",
} as const;

export const VARIANT_CATEGORY_LABEL = "Vertical Mill";

export const LATHE_ROW_CATEGORY = "Lathe";

export const AUXILIARY_BADGES: Record<AuxiliaryKey, string> = {
  laser: "Laser Cutting",
  bending: "Bending",
  measuring: "Measuring",
};

/** Machine model names and brand lines — never localized. */
export const FLAGSHIP_MACHINE = {
  subtitle: "Hard Automation",
  titleLine1: "UMC",
  titleLine2: "500SS",
  imageAltName: "UMC 500SS",
} as const;

export const UMC1000_MACHINE = {
  subtitle: "Hard Automation",
  titleLine1: "UMC",
  titleLine2: "1000",
  imageAltName: "UMC 1000",
} as const;

export const VARIANT_ASSETS: Record<
  VariantKey,
  { title: string; subtitle: string; watermark: string }
> = {
  vf1: { title: "VF-1", subtitle: "Hard Automation", watermark: "VF1" },
  vf2: { title: "VF-2", subtitle: "Hard Automation", watermark: "VF2" },
  vf3: { title: "VF-3", subtitle: "Hard Automation", watermark: "VF3" },
  vf3ss: {
    title: "VF-3SS",
    subtitle: "Hard Automation · Super Speed",
    watermark: "SS",
  },
};

export const LATHE_ASSETS: Record<
  LatheKey,
  { title: string; subtitle: string; image: string }
> = {
  st20: {
    title: "ST-20",
    subtitle: "Hard Automation",
    image: "/images/turning.svg",
  },
  st30: {
    title: "ST-30",
    subtitle: "Hard Automation",
    image: "/images/heavy.svg",
  },
  xl150: {
    title: "XL-150",
    subtitle: "Hard Automation",
    image: "/images/precision.svg",
  },
};

export const AUXILIARY_ASSETS: Record<
  AuxiliaryKey,
  { title: string; subtitle: string; watermark: string }
> = {
  laser: {
    title: "HS-G3015X-B",
    subtitle: "HOG Laser",
    watermark: "LASER",
  },
  bending: {
    title: "3100 × 174",
    subtitle: "Formson — Speed Bend",
    watermark: "BEND",
  },
  measuring: {
    title: "LH 65",
    subtitle: "Wenzel — CMM",
    watermark: "CMM",
  },
};
