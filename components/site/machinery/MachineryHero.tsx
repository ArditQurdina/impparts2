import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import type { CategoryKey, MachineryMessages } from "@/messages/machinery";
import { CATEGORY_NAV_NAMES } from "./machinery-assets";

const CATEGORY_ANCHORS: Record<CategoryKey, string> = {
  verticalMills: "vertical-mills",
  lathes: "lathes",
  laserCutting: "laser-cutting",
  bending: "bending",
  measuring: "measuring",
};

type MachineryHeroProps = {
  content: MachineryMessages["hero"];
};

export function MachineryHero({ content }: MachineryHeroProps) {
  return (
    <section className="bg-background">
      <div className="relative isolate w-full overflow-hidden h-[78svh] min-h-[560px]">
        <Image
          src="/images/hero.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-background/55"
        />

        <Container className="relative flex h-full items-center py-10 sm:py-12 lg:py-16">
          <h1 className="font-display uppercase tracking-tight leading-[0.85]">
            <span className="block text-foreground text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              {content.titleLine1}
            </span>
            <span className="block text-brand text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem]">
              {content.titleLine2}
            </span>
          </h1>
        </Container>
      </div>

      <Container>
        <nav
          aria-label={content.navAriaLabel}
          className="-mx-6 border-t border-border-strong/40 sm:-mx-8 lg:mx-0"
        >
          <div
            className={cn(
              "overflow-x-auto overscroll-x-contain scroll-smooth",
              "snap-x snap-mandatory px-6 sm:px-8",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "lg:overflow-visible lg:px-0"
            )}
          >
            <div
              className={cn(
                "flex min-w-max divide-x divide-border-strong/30",
                "lg:grid lg:min-w-0 lg:grid-cols-5 lg:divide-x-0"
              )}
            >
              {content.categories.map((cat, i) => (
                <a
                  key={cat.key}
                  href={`#${CATEGORY_ANCHORS[cat.key]}`}
                  className={cn(
                    "group relative flex shrink-0 snap-start flex-col items-center justify-center gap-1.5",
                    "w-[42vw] max-w-[9.5rem] px-3 py-4",
                    "sm:w-auto sm:min-w-[7.25rem] sm:max-w-none sm:flex-1 sm:px-4 sm:py-5",
                    "lg:min-w-0 lg:w-auto lg:gap-2 lg:px-2 lg:py-6 xl:py-7",
                    "transition-colors duration-200",
                    i < content.categories.length - 1 &&
                      "lg:border-r lg:border-border-strong/30"
                  )}
                >
                  <span className="font-mono text-sm leading-none text-brand sm:text-base lg:text-lg">
                    {cat.count}
                  </span>
                  <span
                    className={cn(
                      "max-w-[9rem] text-center text-[10px] uppercase leading-tight text-muted",
                      "tracking-[0.14em] transition-colors duration-200",
                      "sm:max-w-none sm:text-[11px] sm:tracking-[0.2em]",
                      "lg:text-xs lg:tracking-[0.22em]",
                      "group-hover:text-foreground"
                    )}
                  >
                    {CATEGORY_NAV_NAMES[cat.key]}
                  </span>
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2 bg-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:w-12"
                  />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </Container>
    </section>
  );
}
