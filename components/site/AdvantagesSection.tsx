"use client";

import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

import type { HomeMessages } from "@/messages/home";

type AdvantagesSectionProps = {
  content: HomeMessages["advantages"];
};

export function AdvantagesSection({ content }: AdvantagesSectionProps) {
  const { panels, swipeLabel, prevLabel, nextLabel } = content;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = Array.from(
      el.querySelectorAll<HTMLElement>("[data-card]")
    );
    if (cards.length === 0) return;

    const scrollLeft = el.scrollLeft;
    let active = 0;
    let minDistance = Infinity;
    cards.forEach((card, i) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        active = i;
      }
    });

    setActiveIndex(active);
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollToIndex = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = Array.from(
      el.querySelectorAll<HTMLElement>("[data-card]")
    );
    const clamped = Math.max(0, Math.min(cards.length - 1, idx));
    const target = cards[clamped];
    if (target) {
      el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div
          ref={scrollerRef}
          className="flex gap-14 lg:gap-20 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 [scrollbar-width:none] [scrollbar-color:transparent_transparent] [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:bg-transparent"
        >
          {panels.map((panel, i) => (
            <article
              key={panel.title}
              data-card
              className="relative shrink-0 snap-start pl-8 min-h-[560px] w-[320px] sm:w-[380px] lg:w-[440px] xl:w-[480px]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-brand" aria-hidden />
              <span
                aria-hidden
                className="absolute left-0 top-0 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 bg-brand"
              />

              <h3
                className={cn(
                  "font-sans font-bold tracking-tight transition-colors duration-300 text-4xl sm:text-[2.25rem] lg:text-[2.5rem]",
                  i === activeIndex ? "text-foreground" : "text-foreground/70"
                )}
              >
                {panel.title}
              </h3>

              <p className="mt-10 min-h-[3.25rem] font-semibold text-foreground text-base sm:text-[17px] leading-snug">
                {panel.lead}
              </p>

              <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-foreground">
                {panel.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-6">
          <div className="inline-flex items-center rounded-full bg-brand">
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={!canPrev}
              aria-label={prevLabel}
              className="rounded-full px-6 py-3 text-foreground transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={!canNext}
              aria-label={nextLabel}
              className="rounded-full px-6 py-3 text-foreground transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight />
            </button>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground">
            {swipeLabel}
          </span>
        </div>
      </Container>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 3L5 8L10 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 3L11 8L6 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
