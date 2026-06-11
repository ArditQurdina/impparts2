import * as React from "react";
import { Container } from "@/components/ui/Container";
import type { MachineryMessages } from "@/messages/machinery";
import { VARIANT_ASSETS, VARIANT_CATEGORY_LABEL } from "./machinery-assets";

type MachineryVariantsSectionProps = {
  content: MachineryMessages["variants"];
};

export function MachineryVariantsSection({
  content,
}: MachineryVariantsSectionProps) {
  return (
    <section className="pb-24 sm:pb-32 lg:pb-40">
      <Container>
        <div className="grid grid-cols-1 gap-px bg-border-strong/30 border-t border-b border-border-strong/30 lg:grid-cols-2">
          {content.items.map((variant) => (
            <VariantCard
              key={variant.key}
              variant={variant}
              assets={VARIANT_ASSETS[variant.key]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function VariantCard({
  variant,
  assets,
}: {
  variant: MachineryMessages["variants"]["items"][number];
  assets: (typeof VARIANT_ASSETS)[keyof typeof VARIANT_ASSETS];
}) {
  return (
    <article className="relative overflow-hidden bg-background p-8 sm:p-10 lg:p-12 xl:p-14">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 right-2 font-display leading-none text-brand/[0.06] text-[100px] sm:text-[140px] lg:text-[180px]"
      >
        {assets.watermark}
      </span>

      <div className="relative flex flex-col">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          {variant.id} / {VARIANT_CATEGORY_LABEL}
        </p>

        <h3 className="mt-5 font-display uppercase leading-none tracking-tight text-brand text-5xl sm:text-6xl">
          {assets.title}
        </h3>

        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          {assets.subtitle}
        </p>

        <p className="mt-7 max-w-md text-sm sm:text-[15px] leading-relaxed text-muted">
          {variant.description}
        </p>

        <dl className="mt-10 flex flex-col">
          {variant.specs.map((spec, index) => (
            <div
              key={spec.label}
              className={`grid grid-cols-12 gap-4 py-3 sm:py-4 border-b border-border-strong/30 ${
                index === 0 ? "border-t" : ""
              }`}
            >
              <dt className="col-span-12 sm:col-span-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted pt-1">
                {spec.label}
              </dt>
              <dd className="col-span-12 sm:col-span-7 text-sm text-foreground">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8">
          <span className="inline-flex items-center border border-border-strong px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            {variant.tag}
          </span>
        </div>
      </div>
    </article>
  );
}
