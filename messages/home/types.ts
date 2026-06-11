export type AdvantagePanel = {
  title: string;
  lead?: string;
  body: string[];
};

export type ExpertiseCard = {
  titleLines: string[];
  description: string;
  imageAlt: string;
};

export type HomeMessages = {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    introBold: string;
    introRest: string;
    ctaRobotics: string;
    ctaIndustries: string;
    stats: { value: string; suffix?: string; label: string }[];
  };
  about: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    paragraphs: string[];
    tags: string[];
  };
  expertise: {
    eyebrow: string;
    title: string;
    description: string;
    guarantee: string;
    cards: ExpertiseCard[];
  };
  advantages: {
    panels: AdvantagePanel[];
    swipeLabel: string;
    prevLabel: string;
    nextLabel: string;
  };
  location: {
    eyebrow: string;
    title: string;
    descriptionSuffix: string;
    openInMaps: string;
    mapTitle: string;
  };
};
