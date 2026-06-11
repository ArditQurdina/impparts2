import * as React from "react";
import { Container } from "@/components/ui/Container";
import type { MachineryMessages } from "@/messages/machinery";

type MachineryStatsSectionProps = {
  content: MachineryMessages["stats"];
};

export function MachineryStatsSection({ content }: MachineryStatsSectionProps) {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col justify-center gap-8 bg-[#0D1012] p-10 sm:p-14 lg:p-16 xl:p-20">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-muted">
              <span className="font-semibold text-foreground">
                {content.leadBold}
              </span>{" "}
              {content.leadRest}
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-[26px] leading-relaxed text-muted">
              {content.paragraph}
            </p>
          </div>

          <div className="lg:pl-12 xl:pl-20">
            <div className="grid h-full grid-cols-2 gap-px bg-border-strong/30 border-b border-border-strong/30">
              {content.items.map((stat) => (
                <StatCell key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StatCell({
  stat,
}: {
  stat: MachineryMessages["stats"]["items"][number];
}) {
  return (
    <div className="bg-background flex flex-col items-start gap-3 p-8 sm:p-10 lg:p-12 min-h-[180px] sm:min-h-[220px]">
      <p className="font-display leading-none text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
        <span className="text-foreground">{stat.value}</span>
        {stat.suffix ? (
          <span className="text-brand">{stat.suffix}</span>
        ) : null}
      </p>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {stat.label}
      </p>
    </div>
  );
}
