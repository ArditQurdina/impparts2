import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ABOUT_HERO_IMAGE } from "./about-assets";
import type { AboutMessages } from "@/messages/about";

type AboutHeroProps = {
  content: AboutMessages["hero"];
};

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="relative h-[78svh] min-h-[560px] w-full">
        <Image
          src={ABOUT_HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-background/50"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"
        />

        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 font-display leading-none text-brand/[0.07] text-[28rem] lg:block"
        >
          87
        </span>

        <Container className="relative flex h-full flex-col justify-end pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pb-16 lg:pt-36">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-8 lg:gap-8">
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-2 w-2 shrink-0 bg-brand" />
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
                  {content.eyebrow}
                </p>
              </div>

              <h1 className="font-display uppercase tracking-tight leading-[0.88] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                <span className="block text-foreground">{content.titleLine1}</span>
                <span className="block text-brand">{content.titleLine2}</span>
                <span className="block text-foreground">{content.titleLine3}</span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted">
                {content.subtitle}
              </p>
            </div>

            <ul className="flex gap-8 border-t border-border-strong/50 pt-8 sm:gap-10 lg:col-span-4 lg:flex-col lg:items-end lg:gap-10 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-10 lg:text-right">
              {content.highlights.map((stat) => (
                <li key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display leading-none text-4xl sm:text-5xl tracking-tight text-foreground">
                    {stat.value}
                    {stat.suffix ? (
                      <span className="text-brand">{stat.suffix}</span>
                    ) : null}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
