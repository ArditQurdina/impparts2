import * as React from "react";
import { Container } from "@/components/ui/Container";
import type { AboutMessages } from "@/messages/about";

type CommitmentSectionProps = {
  content: AboutMessages["commitment"];
};

export function CommitmentSection({ content }: CommitmentSectionProps) {
  return (
    <section className="bg-[#0D1012] py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="flex flex-col gap-4 max-w-3xl">
          <p className="text-sm sm:text-base text-muted">{content.eyebrow}</p>

          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-foreground">{content.titleLine1}</span>
            <span className="block text-brand">{content.titleLine2}</span>
          </h2>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
          {content.pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.key}
              pillar={pillar}
              isFirst={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PillarCard({
  pillar,
  isFirst,
}: {
  pillar: AboutMessages["commitment"]["pillars"][number];
  isFirst: boolean;
}) {
  return (
    <article
      className={`flex flex-col gap-4 md:px-8 lg:px-10 xl:px-14 ${
        isFirst ? "md:pl-0" : "md:border-l md:border-brand"
      }`}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
        {pillar.kicker}
      </p>
      <h3 className="font-display uppercase tracking-tight leading-none text-3xl sm:text-4xl">
        {pillar.title}
      </h3>
      <p className="text-base leading-relaxed text-muted max-w-sm">
        {pillar.body}
      </p>
    </article>
  );
}
