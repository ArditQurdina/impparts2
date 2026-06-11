import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { MachineryMessages } from "@/messages/machinery";
import { LATHE_ASSETS, LATHE_ROW_CATEGORY, LATHES_SECTION } from "./machinery-assets";

type MachineryLathesSectionProps = {
  content: MachineryMessages["lathes"];
};

export function MachineryLathesSection({
  content,
}: MachineryLathesSectionProps) {
  return (
    <section id="lathes" className="py-24 sm:py-32 lg:py-40 scroll-mt-24">
      <Container>
        <div className="relative">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand">
            <span className="text-brand/60">[</span>
            <span className="px-2">{content.categoryLabel}</span>
            <span className="text-brand/60">]</span>
          </p>

          <h2 className="mt-10 font-display uppercase leading-[0.85] tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            {LATHES_SECTION.titleLine1}
            <br />
            {LATHES_SECTION.titleLine2}
          </h2>
        </div>

        <div className="mt-16 flex flex-col lg:mt-20">
          {content.items.map((lathe, index) => (
            <LatheRow
              key={lathe.key}
              lathe={lathe}
              assets={LATHE_ASSETS[lathe.key]}
              typeLabel={content.typeLabel}
              isLast={index === content.items.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function LatheRow({
  lathe,
  assets,
  typeLabel,
  isLast,
}: {
  lathe: MachineryMessages["lathes"]["items"][number];
  assets: (typeof LATHE_ASSETS)[keyof typeof LATHE_ASSETS];
  typeLabel: string;
  isLast: boolean;
}) {
  return (
    <article
      className={`grid grid-cols-12 py-10 sm:py-12 lg:py-14 border-t border-border-strong/30 ${
        isLast ? "border-b" : ""
      }`}
    >
      <div className="col-span-12 lg:col-span-2 flex flex-col lg:pr-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          {lathe.id} / {LATHE_ROW_CATEGORY}
        </p>
        <h3 className="mt-4 font-display uppercase leading-none tracking-tight text-brand text-4xl sm:text-5xl">
          {assets.title}
        </h3>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          {assets.subtitle}
        </p>
      </div>

      <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-6 lg:px-8 lg:border-l lg:border-border-strong/30">
        <p className="text-sm sm:text-[15px] leading-relaxed text-muted">
          {lathe.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {lathe.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex items-center border border-border-strong/50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-12 lg:col-span-3 flex items-center justify-center lg:px-8 lg:border-l lg:border-border-strong/30">
        <Image
          src={assets.image}
          alt={assets.title}
          width={500}
          height={400}
          className="h-auto w-full max-w-[260px] object-contain"
        />
      </div>

      <div className="col-span-12 lg:col-span-2 flex flex-col items-start lg:items-end lg:text-right lg:pl-8 lg:border-l lg:border-border-strong/30">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          {typeLabel}
        </p>
        <p className="mt-3 font-display uppercase leading-[0.95] tracking-tight text-muted text-2xl sm:text-3xl">
          {lathe.type}
        </p>
      </div>
    </article>
  );
}
