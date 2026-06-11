import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { AboutMessages } from "@/messages/about";

type RootedInKosovoSectionProps = {
  content: AboutMessages["kosovo"];
};

export function RootedInKosovoSection({ content }: RootedInKosovoSectionProps) {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="flex flex-col gap-4 lg:max-w-[50%]">
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-5xl sm:text-6xl lg:text-7xl">
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h2>
          <span aria-hidden className="block h-px w-12 bg-brand" />
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-stretch">
          <div className="relative w-full overflow-hidden border border-border-strong/40 aspect-[5/4] lg:aspect-auto lg:min-h-[640px] xl:min-h-[720px]">
            <Image
              src="/images/impoffice.svg"
              alt={content.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-between gap-8 lg:gap-0">
            <p className="text-base sm:text-[17px] lg:text-lg leading-relaxed text-muted">
              {content.paragraph1.before}
              <span className="font-semibold text-foreground">
                {content.paragraph1.highlight}
              </span>
              {content.paragraph1.after}
            </p>

            <p className="text-base sm:text-[17px] lg:text-lg leading-relaxed text-muted">
              {content.paragraph2}
            </p>

            <div className="grid grid-cols-2 border border-border-strong/40 bg-[#0D1012]">
              {content.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center gap-3 py-10 sm:py-12 ${
                    index === 0 ? "border-r border-border-strong/40" : ""
                  }`}
                >
                  <p className="font-display leading-none text-5xl sm:text-6xl lg:text-7xl">
                    <span className="text-brand">{stat.value}</span>
                    {stat.suffix ? (
                      <span className="text-brand">{stat.suffix}</span>
                    ) : null}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-[17px] lg:text-lg leading-relaxed text-muted">
              {content.paragraph3}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
