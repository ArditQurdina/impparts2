export type PillarKey = "heritage" | "performance" | "flexibility";

export type AboutMessages = {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitle: string;
    highlights: { value: string; suffix?: string; label: string }[];
  };
  kosovo: {
    titleLine1: string;
    titleLine2: string;
    imageAlt: string;
    paragraph1: { before: string; highlight: string; after: string };
    paragraph2: string;
    paragraph3: string;
    stats: { value: string; suffix?: string; label: string }[];
  };
  commitment: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    pillars: {
      key: PillarKey;
      kicker: string;
      title: string;
      body: string;
    }[];
  };
  experience: {
    titleLine1: string;
    titleLine2: string;
  };
};
