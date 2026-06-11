import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { localizeHref } from "@/lib/i18n-server";
import type { RoboticsMessages } from "@/messages/robotics";

type RoboticsHeroProps = {
  content: RoboticsMessages["hero"];
};

export async function RoboticsHero({ content }: RoboticsHeroProps) {
  const industriesHref = await localizeHref("/industries");

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
          <div className="flex max-w-3xl flex-col gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
                {content.eyebrow}
              </p>

              <h1 className="mt-3 font-display leading-[0.85] tracking-tight text-5xl sm:text-7xl lg:text-8xl xl:text-9xl">
                <span className="text-brand">{content.titleThe} </span>
                <span className="text-foreground">{content.titleMain}</span>
              </h1>
            </div>

            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-muted">
              <span className="font-semibold text-foreground">
                {content.introBold}
              </span>{" "}
              {content.introRest}
            </p>

            {/* <div className="flex flex-wrap gap-3">
              <Button
                as="a"
                href="#solutions"
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
            </div> */}
          </div>
        </Container>
      </div>
    </section>
  );
}
