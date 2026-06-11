import { Container } from "@/components/ui/Container";
import type { AboutMessages } from "@/messages/about";

type ExperienceSectionProps = {
  content: AboutMessages["experience"];
};

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-white text-5xl sm:text-7xl lg:text-8xl">
            {content.titleLine1}
          </h2>

          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-brand text-5xl sm:text-7xl lg:text-8xl">
            
            {content.titleLine2}
          </h2>
        </div>
      </Container>
    </section>
  );
}
