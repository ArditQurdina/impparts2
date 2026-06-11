import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import type { HomeMessages } from "@/messages/home";

type LocationSectionProps = {
  content: HomeMessages["location"];
};

export function LocationSection({ content }: LocationSectionProps) {
  const { location, address } = siteConfig;
  const { lat, lng } = location;

  return (
    <section>
      <Container>
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
              {content.eyebrow}
            </p>
            <h2 className="font-display uppercase tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-foreground">
              {content.title}
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted lg:text-right">
            {address}. {content.descriptionSuffix}
          </p>
        </div>
      </Container>

      <div className="relative h-[50svh] min-h-[420px] w-full overflow-hidden bg-background">
        <iframe
          src={`https://maps.google.com/maps?q=${lat},${lng}&z=18&output=embed`}
          title={content.mapTitle}
          loading="lazy"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 border-0 invert hue-rotate-180 brightness-[0.9] saturate-[0.6] contrast-[0.95]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_40%,var(--color-background)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-full"
        >
          <svg width="40" height="52" viewBox="0 0 40 52" fill="none">
            <path
              d="M20 0C8.954 0 0 8.954 0 20c0 14.5 20 32 20 32s20-17.5 20-32C40 8.954 31.046 0 20 0z"
              fill="var(--color-brand-500)"
            />
            <circle cx="20" cy="20" r="7" fill="var(--color-surface)" />
          </svg>
        </div>

        <Container className="pointer-events-none absolute inset-0 z-20 flex items-end justify-end pb-8">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-brand-600"
          >
            {content.openInMaps}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 9L9 3M9 3H4.5M9 3V7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Container>
      </div>
    </section>
  );
}
