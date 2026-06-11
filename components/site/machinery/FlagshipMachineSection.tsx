import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { MachineryMessages } from "@/messages/machinery";
import { FLAGSHIP_MACHINE, VERTICAL_MILLS_SECTION } from "./machinery-assets";

type FlagshipMachineSectionProps = {
  content: MachineryMessages["flagship"];
};

export function FlagshipMachineSection({
  content,
}: FlagshipMachineSectionProps) {
  return (
    <section
      id="vertical-mills"
      className="py-16 sm:py-24 lg:py-16 xl:py-28 2xl:py-36 scroll-mt-24"
    >
      <Container>
        <div className="flex flex-col gap-10 sm:gap-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-6 xl:gap-y-8">
          <div className="flex items-start justify-between gap-6 lg:col-span-12 lg:contents">
            <div className="flex flex-col lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
                {content.categoryLabel}{" "}
                <span className="ml-2 text-brand/60">|</span>
              </p>
              <h2 className="mt-4 font-display uppercase leading-[0.85] tracking-tight text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                {VERTICAL_MILLS_SECTION.titleLine1}
                <br />
                {VERTICAL_MILLS_SECTION.titleLine2}
              </h2>
              <div className="mt-5 lg:mt-6">
                <span className="inline-flex items-center bg-brand px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-white">
                  {content.tag}
                </span>
              </div>
            </div>

            <p className="shrink-0 font-display leading-none text-brand text-5xl sm:text-6xl lg:col-span-4 lg:text-right lg:text-7xl xl:text-8xl 2xl:text-9xl">
              05
            </p>
          </div>

          <div className="relative flex items-end lg:col-span-6">
            <Image
              src="/images/flagship.svg"
              alt={`${FLAGSHIP_MACHINE.imageAltName} — ${content.imageAltDescription}`}
              width={1200}
              height={1200}
              priority
              className="h-auto w-full object-contain lg:max-h-[min(42svh,400px)] xl:max-h-[min(48svh,480px)] 2xl:max-h-none"
            />
          </div>

          <div className="flex flex-col lg:col-span-6 lg:pt-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
              {FLAGSHIP_MACHINE.subtitle}
            </p>
            <h3 className="mt-3 font-display uppercase leading-[0.85] tracking-tight text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              {FLAGSHIP_MACHINE.titleLine1}
              <br />
              {FLAGSHIP_MACHINE.titleLine2}
            </h3>

            <p className="mt-5 max-w-xl text-sm sm:text-base lg:mt-6 lg:text-[15px] xl:mt-8 xl:text-[17px] leading-relaxed text-muted">
              {content.description}
            </p>

            <dl className="mt-6 flex flex-col lg:mt-7 xl:mt-10">
              {content.specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-12 gap-4 py-3 sm:py-3.5 lg:py-3 xl:py-4 border-b border-border-strong/30 ${
                    index === 0 ? "border-t" : ""
                  }`}
                >
                  <dt className="col-span-12 sm:col-span-4 font-mono text-[10px] uppercase tracking-[0.28em] text-brand pt-1">
                    {spec.label}
                  </dt>
                  <dd className="col-span-12 sm:col-span-8 text-sm sm:text-[15px] text-foreground">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
