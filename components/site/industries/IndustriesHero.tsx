import { Container } from "@/components/ui/Container";
import type { IndustriesMessages } from "@/messages/industries";
import { IndustryCard } from "./IndustryCard";
import { INDUSTRY_ASSETS } from "./industries-assets";

type IndustriesHeroProps = {
  content: IndustriesMessages["hero"];
};

export function IndustriesHero({ content }: IndustriesHeroProps) {
  return (
    <section className="pt-32 sm:pt-40 lg:pt-48">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 lg:max-w-3xl">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-2 w-2 bg-brand" />
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
                {content.eyebrow}
              </p>
            </div>

            <h1 className="font-display uppercase tracking-tight leading-[0.85] text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
              <span className="text-brand">{content.titleBrand}</span>{" "}
              <span className="text-foreground">{content.titleRest}</span>
            </h1>
          </div>

          <p className="max-w-xl text-base sm:text-[17px] leading-relaxed text-foreground lg:mt-6">
            {content.intro}
          </p>
        </div>

        <div className="mt-14 sm:mt-16 lg:mt-20 flex flex-col gap-5">
          <p className="text-foreground text-base sm:text-lg leading-snug max-w-xl">
            {content.versatility}
          </p>
          <span aria-hidden className="block h-px w-full bg-background" />
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {content.industries.map((item) => {
            const assets = INDUSTRY_ASSETS[item.key];

            return (
              <IndustryCard
                key={item.key}
                title={item.title}
                icon={assets.icon}
                image={assets.image}
                imageAlt={assets.imageAlt}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
