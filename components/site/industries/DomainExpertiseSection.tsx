"use client";

import * as React from "react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import type { IndustriesMessages } from "@/messages/industries";

type DomainExpertiseSectionProps = {
  content: IndustriesMessages["domain"];
};

export function DomainExpertiseSection({
  content,
}: DomainExpertiseSectionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="pt-32 sm:pt-40 lg:pt-48">
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span aria-hidden className="block h-px w-8 bg-brand" />
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
              {content.eyebrow}
            </p>
          </div>

          <h2 className="font-display uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            <span className="text-brand">{content.titleBrand}</span>{" "}
            <span className="text-foreground">{content.titleRest}</span>
          </h2>
        </div>

        <div className="mt-20 sm:mt-24 lg:mt-32 border-t border-border-strong">
          {content.items.map((domain, i) => {
            const open = openIndices.has(i);
            const bodyId = `domain-body-${i}`;
            return (
              <article
                key={domain.key}
                className="border-b border-border-strong"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  aria-controls={bodyId}
                  className="grid w-full grid-cols-1 items-start gap-4 py-10 text-left transition-colors hover:bg-foreground/[0.02] sm:py-12 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-6 lg:py-16"
                >
                  <div className="flex min-w-0 items-center gap-3 lg:col-span-2">
                    <span
                      aria-hidden
                      className="block h-2 w-2 shrink-0 rounded-full bg-brand"
                    />
                    <span className="min-w-0 break-words text-xs uppercase tracking-[0.24em] text-brand sm:text-[13px]">
                      {domain.label}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "min-w-0 break-words font-sans font-medium leading-[1.15] transition-colors duration-300 lg:col-span-4",
                      "text-2xl sm:text-3xl lg:text-[2.5rem] xl:text-5xl",
                      open ? "text-foreground" : "text-foreground/70"
                    )}
                  >
                    {domain.title}
                  </h3>

                  <div
                    id={bodyId}
                    className="grid min-w-0 transition-[grid-template-rows] duration-500 ease-out lg:col-span-6"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={cn(
                          "break-words text-base leading-relaxed text-muted transition-opacity duration-300 sm:text-[17px]",
                          open ? "opacity-100" : "opacity-0"
                        )}
                      >
                        {domain.body}
                      </p>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
