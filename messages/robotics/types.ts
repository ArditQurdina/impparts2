export type SolutionKey =
  | "welding"
  | "handling"
  | "assembly"
  | "inspection"
  | "integration"
  | "safety";

export type ExpertiseKey = "design" | "manufacturing" | "quality";

export type RoboticsMessages = {
  hero: {
    eyebrow: string;
    titleThe: string;
    titleMain: string;
    introBold: string;
    introRest: string;
    ctaRobotics: string;
    ctaIndustries: string;
  };
  stats: {
    items: {
      value: string;
      suffix?: string;
      label: string;
    }[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    items: {
      key: SolutionKey;
      title: string;
      description: string;
    }[];
  };
  expertise: {
    eyebrow: string;
    title: string;
    items: {
      key: ExpertiseKey;
      title: string;
      description: string;
      tags: string[];
    }[];
  };
  impact: {
    titleWhite: string;
    titleBrand: string;
    description: string;
    features: string[];
    ctaLabel: string;
    videoAlt: string;
    /** Optional embed or external video URL — play control uses this when set. */
    videoUrl?: string;
  };
  partners: {
    investorLabel: string;
    partnersLabel: string;
    oemLabel: string;
  };
};
