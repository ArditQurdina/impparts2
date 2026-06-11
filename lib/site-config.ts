/**
 * Site-wide configuration.
 *
 * This is the single source of truth for everything the chrome of the site
 * renders (header, footer, contact info, locales, etc.). Components in
 * `src/components/site/**` must receive their data via props sourced from
 * here, so the entire shell can be re-skinned by editing one file.
 */

export type Locale = {
  /** ISO 639-1 code (e.g. "en"). Used as the URL prefix. */
  code: string;
  /** Short, user-facing label shown in the switcher (e.g. "EN"). */
  label: string;
  /** Long, accessible name announced to screen readers. */
  name: string;
};

export type NavItem = {
  /** User-facing label. */
  label: string;
  /** Internal path or absolute URL. */
  href: string;
  /**
   * Set to `true` for links pointing outside the app. Renders a target
   * indicator (arrow glyph) and adds the proper `rel`/`target` attributes.
   */
  external?: boolean;
};

export type ContactChannel = {
  /** Channel kind — drives icon + protocol. */
  kind: "email" | "phone";
  /** User-facing label (e.g. "info@impparts.com"). */
  label: string;
  /** Raw value used to build the `href` (e.g. "+38348787900"). */
  value: string;
};

export type SocialPlatform = "linkedin" | "instagram";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type StandardsCard = {
  title: string;
  body: string;
};

export type GeoLocation = {
  /** Decimal latitude (e.g. 42.3918 for Gjakova). */
  lat: number;
  /** Decimal longitude (e.g. 20.4267). */
  lng: number;
  /** Label shown on the map pin's tooltip. */
  label: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  /** Short company description shown in the footer. */
  description: string;
  /** Physical address shown in the footer contact column. */
  address: string;
  /** Physical map location used by the LocationSection. */
  location: GeoLocation;
  locales: Locale[];
  defaultLocale: string;
  contact: ContactChannel[];
  primaryNav: NavItem[];
  /** Curated subset of links shown in the footer "Navigate" column. */
  footerNav: NavItem[];
  /** Highlighted card content in the footer "Standards" column. */
  standards: StandardsCard;
  social: SocialLink[];
  cta: { label: string; href: string };
};

export const siteConfig: SiteConfig = {
  name: "IMP",
  tagline: "Precision Parts",
  description:
    "IMP, based in Kosovo, is a private company founded by Rronifer. Committed to high-quality, accurate manufacturing with competent management.",
  address: "Mark Malota, Gjakovë 5000",
  location: {
    lat: 42.3970875,
    lng: 20.424829,
    label: "IMP — Mark Malota, Gjakovë",
  },
  defaultLocale: "en",
  locales: [
    { code: "en", label: "EN", name: "English" },
    { code: "al", label: "AL", name: "Albanian" },
    { code: "de", label: "DE", name: "German" },
  ],
  contact: [
    { kind: "email", label: "info@impparts.com", value: "info@impparts.com" },
    { kind: "phone", label: "+383 48 787 900", value: "+38348787900" },
  ],
  primaryNav: [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Machinery", href: "/machinery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Academy", href: "https://imptraining.com/", external: true },
  ],
  footerNav: [
    { label: "Industries", href: "/industries" },
    { label: "Machinery", href: "/machinery" },
    { label: "About Us", href: "/about" },
  ],
  standards: {
    title: "Accredited Excellence",
    body: "Every component delivered strictly following ISO & ASTM quality standards.",
  },
  social: [
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/imp-parts/",
    },
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/imp.parts/",
    },
  ],
  cta: { label: "Get a quote", href: "/quote" },
};
