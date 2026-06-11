import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { ContactMessages } from "@/messages/contact";

type ContactHeroProps = {
  content: ContactMessages["hero"];
  imageSrc?: string;
  imageAlt?: string;
};

export function ContactHero({ content, imageSrc, imageAlt }: ContactHeroProps) {
  return (
    <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className={imageSrc ? "grid gap-10 lg:grid-cols-[minmax(360px,40%)_minmax(auto,1fr)]" : "flex flex-col gap-6 max-w-4xl"}>
          {imageSrc ? (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface">
              <Image
                src={imageSrc}
                alt={imageAlt ?? content.titleContact}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}

          <div className="flex flex-col gap-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
              {content.eyebrow}
            </p>

            <h1 className="font-display uppercase tracking-tight leading-[0.9] text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
              <span className="text-foreground">{content.titleContact}</span>{" "}
              <span className="text-brand">{content.titleBrand}</span>
            </h1>

            <p className="mt-2 max-w-xl text-base sm:text-[17px] leading-relaxed text-muted">
              {content.intro}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
