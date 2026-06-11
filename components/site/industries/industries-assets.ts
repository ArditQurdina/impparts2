import type { IndustryItem } from "@/messages/industries";

export const INDUSTRY_ASSETS: Record<
  IndustryItem["key"],
  {
    icon: string;
    image: string;
    imageAlt: string;
  }
> = {
  civil: {
    icon: "/images/civil.svg",
    image: "/images/impoffice.svg",
    imageAlt: "Civil engineering and construction manufacturing",
  },
  automation: {
    icon: "/images/automation.svg",
    image: "/images/cncmining.svg",
    imageAlt: "CNC automation and industrial robotics",
  },
  aerospace: {
    icon: "/images/aerospace.svg",
    image: "/images/flagship.svg",
    imageAlt: "Aerospace precision manufacturing",
  },
  steelWires: {
    icon: "/images/steelwires.svg",
    image: "/images/cnclathe.svg",
    imageAlt: "Steel wire industry machinery components",
  },
};
