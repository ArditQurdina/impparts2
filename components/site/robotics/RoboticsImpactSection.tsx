import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { localizeHref } from "@/lib/i18n-server";
import { IMPACT_VIDEO_POSTER } from "./robotics-assets";
import type { RoboticsMessages } from "@/messages/robotics";

type RoboticsImpactSectionProps = {
  content: RoboticsMessages["impact"];
};

export async function RoboticsImpactSection({
  content,
}: RoboticsImpactSectionProps) {
  const contactHref = await localizeHref("/contact-us");

  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex flex-col gap-8">
            <h2 className="font-display uppercase tracking-tight leading-[0.9] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block text-foreground">{content.titleWhite}</span>
              <span className="block text-brand">{content.titleBrand}</span>
            </h2>

            <p className="max-w-lg text-base sm:text-[17px] leading-relaxed text-muted">
              {content.description}
            </p>

            <ul className="flex flex-col gap-4">
              {content.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <ImpactCheckIcon />
                  <span className="text-sm sm:text-base text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={contactHref}
              className="inline-flex w-fit items-center gap-3 bg-brand px-8 py-4 font-mono text-[12px] uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-brand-600"
            >
              {content.ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="relative aspect-video w-full overflow-hidden border border-border-strong bg-surface">
            <Image
              src={IMPACT_VIDEO_POSTER}
              alt={content.videoAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-background/40"
            />
            {content.videoUrl ? (
              <a
                href={content.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
                aria-label={content.videoAlt}
              >
                <PlayButton />
              </a>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ImpactCheckIcon() {
  return (
    <span
      aria-hidden
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand"
    >
      <svg
        className="h-3 w-3 text-foreground"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 6l3 3 5-5" />
      </svg>
    </span>
  );
}

function PlayButton() {
  return (
    <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground/80 bg-background/30 backdrop-blur-sm sm:h-20 sm:w-20">
      <svg
        className="ml-1 h-6 w-6 text-foreground sm:h-7 sm:w-7"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M8 5v14l11-7L8 5z" />
      </svg>
    </span>
  );
}
