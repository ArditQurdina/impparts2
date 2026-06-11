import { Container } from "@/components/ui/Container";
import { ImageCard } from "@/components/ui/ImageCard";
import type { HomeMessages } from "@/messages/home";

const CARD_IMAGES = [
  "/images/cncmining.svg",
  "/images/cnclathe.svg",
  "/images/assemble.svg",
] as const;

type ExpertiseSectionProps = {
  content: HomeMessages["expertise"];
};

export function ExpertiseSection({ content }: ExpertiseSectionProps) {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-6">
          <p className="text-[12px] uppercase tracking-[0.28em] text-brand">
            {content.eyebrow}
          </p>

          <h2 className="font-display text-brand uppercase tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
            {content.title}
          </h2>

          <p className="mt-2 text-base sm:text-[17px] leading-relaxed text-muted">
            {content.description}
          </p>

          <p className="mt-2 font-semibold text-foreground text-base sm:text-lg">
            {content.guarantee}
          </p>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {content.cards.map((card, i) => (
            <ImageCard
              key={i}
              title={
                <>
                  {card.titleLines.map((line, j) => (
                    <span key={j}>
                      {j > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </>
              }
              description={card.description}
              image={CARD_IMAGES[i]}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
