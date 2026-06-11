import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { localizeHref } from "@/lib/i18n-server";
import type { HomeMessages } from "@/messages/home";

type HeroProps = {
  content: HomeMessages["hero"];
};

export async function Hero({ content }: HeroProps) {
  const [roboticsHref, industriesHref] = await Promise.all([
    localizeHref("/robotics"),
    localizeHref("/industries"),
  ]);

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

        <Container className="relative flex h-full items-stretch gap-8 py-10 sm:py-12 lg:py-16">
          <div className="flex flex-1 flex-col">
            <div className="my-auto">
              <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
                {content.eyebrow}
              </p>

              <h1 className="mt-3 font-display leading-[0.8] tracking-tight text-5xl sm:text-7xl lg:text-9xl xl:text-[10rem]">
                <span className="block text-foreground">{content.titleLine1}</span>
                <span className="block text-brand">
                  {content.titleLine2}
                  <span className="text-foreground">.</span>
                </span>
              </h1>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
              <p className="max-w-xs text-sm leading-relaxed text-muted">
                <span className="font-semibold text-foreground">
                  {content.introBold}
                </span>{" "}
                {content.introRest}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  as="a"
                  href={roboticsHref}
                  variant="primary"
                  size="md"
                  className="rounded-none uppercase tracking-[0.16em] text-[12px] sm:text-[13px] gap-3"
                >
                  <Image
                    src="/images/heroicon.svg"
                    alt=""
                    width={36}
                    height={23}
                    className="h-4 w-auto"
                  />
                  {content.ctaRobotics}
                </Button>
                <Button
                  as="a"
                  href={industriesHref}
                  variant="ghost"
                  size="md"
                  className="rounded-none border border-border-strong uppercase tracking-[0.16em] text-[12px] sm:text-[13px] hover:bg-transparent hover:border-foreground"
                >
                  {content.ctaIndustries}
                </Button>
              </div>
            </div>
          </div>

          <ul className="hidden md:flex flex-col items-end justify-center gap-12 text-right shrink-0">
            {content.stats.map((s) => (
              <li key={s.label} className="flex flex-col items-end gap-1">
                <span className="font-display text-3xl lg:text-4xl tracking-tight text-foreground">
                  {s.value}
                  {s.suffix ? <span className="text-brand">{s.suffix}</span> : null}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-subtle">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
