import { Container } from "@/components/ui/Container";
import { SolutionIcon } from "./robotics-assets";
import type { RoboticsMessages } from "@/messages/robotics";

type SolutionsSectionProps = {
  content: RoboticsMessages["solutions"];
};

export function SolutionsSection({ content }: SolutionsSectionProps) {
  return (
    <section
      id="solutions"
      className="bg-[#F6F6F6] py-24 sm:py-32 lg:py-40 scroll-mt-24"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center ">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
            {content.eyebrow}
          </p>
          <h2 className="font-display uppercase tracking-tight leading-[0.95] text-zinc-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            {content.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {content.items.map((item) => (
            <article
              key={item.key}
              className="group flex flex-col gap-6 bg-white p-8 border rounded-lg"
            >
              <SolutionIcon type={item.key} className="h-[52px] w-[52px]" />

              <div className="flex flex-1 flex-col gap-3">
                <h3 className="font-sans text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </div>

              {/* <span
                aria-hidden
                className="text-brand transition-transform group-hover:translate-x-1"
              >
                →
              </span> */}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
