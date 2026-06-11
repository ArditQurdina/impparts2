import { Container } from "@/components/ui/Container";
import type { HomeMessages } from "@/messages/home";

type AboutSectionProps = {
  content: HomeMessages["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="lg:max-w-[40%]">
          <h2 className="font-display text-brand uppercase leading-[0.85] tracking-tight text-7xl sm:text-8xl lg:text-9xl xl:text-[9rem]">
            <span className="block">{content.titleLine1}</span>
            <span className="block pl-8 sm:pl-12 lg:pl-14 text-white">
              {content.titleLine2}
            </span>
          </h2>
        </div>

        <div className="mt-12 lg:-mt-32 lg:ml-[45%] lg:max-w-xl flex flex-col gap-8">
          <h3 className="text-brand font-semibold uppercase tracking-[0.12em] leading-snug text-base sm:text-lg lg:text-4xl">
            {content.subtitle}
          </h3>

          <div className="flex flex-col gap-6 leading-relaxed uppercase tracking-[0.06em] text-white text-sm sm:text-base lg:text-[17px]">
            {content.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <ul className="mt-2 flex flex-col gap-1.5 uppercase tracking-[0.12em] text-white text-sm sm:text-base lg:text-[17px]">
            {content.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
