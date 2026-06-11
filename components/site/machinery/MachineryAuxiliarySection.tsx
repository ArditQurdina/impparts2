import * as React from "react";
import { Container } from "@/components/ui/Container";
import type { AuxiliaryKey, MachineryMessages } from "@/messages/machinery";
import {
  AUXILIARY_ASSETS,
  AUXILIARY_BADGES,
  AUXILIARY_SECTION,
} from "./machinery-assets";

const AUXILIARY_ANCHORS: Record<AuxiliaryKey, string> = {
  laser: "laser-cutting",
  bending: "bending",
  measuring: "measuring",
};

type MachineryAuxiliarySectionProps = {
  content: MachineryMessages["auxiliary"];
};

export function MachineryAuxiliarySection({
  content,
}: MachineryAuxiliarySectionProps) {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      {(Object.keys(AUXILIARY_ANCHORS) as AuxiliaryKey[]).map((key) => (
        <span
          key={key}
          id={AUXILIARY_ANCHORS[key]}
          aria-hidden
          className="absolute -top-24 left-0"
        />
      ))}
      <Container>
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand">
              <span className="text-brand/60">[</span>
              <span className="px-2">{content.categoryLabel}</span>
              <span className="text-brand/60">]</span>
            </p>
            <h2 className="mt-10 font-display uppercase leading-[0.85] tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              {AUXILIARY_SECTION.titleLine1}
              <br />
              {AUXILIARY_SECTION.titleLine2}
            </h2>
          </div>

          <p className="font-display leading-none text-brand/30 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
            03
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border-strong/30 lg:mt-20 lg:grid-cols-3">
          {content.items.map((card) => (
            <AuxiliaryCard
              key={card.key}
              card={card}
              assets={AUXILIARY_ASSETS[card.key]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function AuxiliaryCard({
  card,
  assets,
}: {
  card: MachineryMessages["auxiliary"]["items"][number];
  assets: (typeof AUXILIARY_ASSETS)[keyof typeof AUXILIARY_ASSETS];
}) {
  return (
    <article className="relative overflow-hidden bg-background p-8 lg:p-10">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-4 right-2 font-display leading-none text-brand/[0.05] text-[120px] sm:text-[160px] lg:text-[180px]"
      >
        {assets.watermark}
      </span>

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center border border-brand px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.28em] text-brand">
            {AUXILIARY_BADGES[card.key]}
          </span>
          <span className="inline-flex items-center border border-border-strong/50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.28em] text-muted">
            {card.status}
          </span>
        </div>

        <h3 className="mt-10 font-display uppercase leading-none tracking-tight text-3xl sm:text-4xl lg:text-[40px]">
          {assets.title}
        </h3>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          {assets.subtitle}
        </p>

        <p className="mt-6 min-h-[10rem] text-sm leading-relaxed text-muted">
          {card.description}
        </p>

        <dl className="mt-10 flex flex-col">
          {card.specs.map((spec, index) => (
            <div
              key={spec.label}
              className={`grid grid-cols-12 gap-3 py-3 border-b border-border-strong/30 ${
                index === 0 ? "border-t" : ""
              }`}
            >
              <dt className="col-span-12 sm:col-span-5 font-mono text-[9px] uppercase tracking-[0.28em] text-muted pt-1">
                {spec.label}
              </dt>
              <dd className="col-span-12 sm:col-span-7 text-sm text-foreground text-right">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
