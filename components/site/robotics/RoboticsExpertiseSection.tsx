import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  EXPERTISE_IMAGE_ALT,
  EXPERTISE_IMAGES,
  ExpertiseIcon,
} from "./robotics-assets";
import type { RoboticsMessages } from "@/messages/robotics";

type RoboticsExpertiseSectionProps = {
  content: RoboticsMessages["expertise"];
};

export function RoboticsExpertiseSection({
  content,
}: RoboticsExpertiseSectionProps) {
  return (
    <section className="bg-[#F6F6F6] py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
            {content.eyebrow}
          </p>
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-zinc-900 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            {content.title}
          </h2>
          <span aria-hidden className="block h-px w-12 bg-brand" />
        </div>

        <div className="mt-16 flex flex-col gap-16 lg:mt-20 lg:gap-24">
          {content.items.map((item, index) => {
            const imageFirst = index % 2 === 1;

            return (
              <article
                key={item.key}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden border border-zinc-200 bg-white ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={EXPERTISE_IMAGES[item.key]}
                    alt={EXPERTISE_IMAGE_ALT[item.key]}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`flex flex-col gap-6 ${
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <ExpertiseIcon type={item.key} className="h-8 w-8" />

                  <h3 className="font-display uppercase tracking-tight leading-none text-zinc-900 text-3xl sm:text-4xl lg:text-5xl">
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-[17px] leading-relaxed text-zinc-600">
                    {item.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
  {item.tags.map((tag) => (
    <li key={tag}>
      <span className="inline-flex overflow-hidden border border-zinc-200">
        <span className="w-1 bg-brand" />
        <span className="bg-[#E8E8E8] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-500">
          {tag}
        </span>
      </span>
    </li>
  ))}
</ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
