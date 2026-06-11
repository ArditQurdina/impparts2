export type Spec = { label: string; value: string };

export type CategoryKey =
  | "verticalMills"
  | "lathes"
  | "laserCutting"
  | "bending"
  | "measuring";

export type VariantKey = "vf1" | "vf2" | "vf3" | "vf3ss";

export type LatheKey = "st20" | "st30" | "xl150";

export type AuxiliaryKey = "laser" | "bending" | "measuring";

export type MachineryMessages = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    navAriaLabel: string;
    categories: { key: CategoryKey; count: string }[];
  };
  stats: {
    leadBold: string;
    leadRest: string;
    paragraph: string;
    items: { value: string; suffix?: string; label: string }[];
  };
  flagship: {
    categoryLabel: string;
    tag: string;
    description: string;
    imageAltDescription: string;
    specs: Spec[];
  };
  umc1000: {
    categoryLabel: string;
    tag: string;
    description: string;
    imageAltDescription: string;
    specs: Spec[];
  };
  variants: {
    items: {
      key: VariantKey;
      id: string;
      description: string;
      specs: Spec[];
      tag: string;
    }[];
  };
  lathes: {
    categoryLabel: string;
    typeLabel: string;
    items: {
      key: LatheKey;
      id: string;
      description: string;
      tags: string[];
      type: string;
    }[];
  };
  auxiliary: {
    categoryLabel: string;
    items: {
      key: AuxiliaryKey;
      id: string;
      status: string;
      description: string;
      specs: Spec[];
    }[];
  };
  cta: {
    headline: string;
  };
};
