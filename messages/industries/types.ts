export type IndustryItem = {
  /** Stable key for matching with the static icon/href definition. */
  key: "civil" | "automation" | "aerospace" | "steelWires";
  title: string;
};

export type DomainItem = {
  /** Stable key for matching with section order. */
  key: "steelWires" | "automation" | "aerospace" | "civil";
  label: string;
  title: string;
  body: string;
};

export type IndustriesMessages = {
  hero: {
    eyebrow: string;
    titleBrand: string;
    titleRest: string;
    intro: string;
    versatility: string;
    industries: IndustryItem[];
  };
  domain: {
    eyebrow: string;
    titleBrand: string;
    titleRest: string;
    items: DomainItem[];
  };
};
