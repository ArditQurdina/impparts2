import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PARTNER_LOGOS } from "./robotics-assets";
import type { RoboticsMessages } from "@/messages/robotics";

type RoboticsPartnersSectionProps = {
  content: RoboticsMessages["partners"];
};

export function RoboticsPartnersSection({
  content,
}: RoboticsPartnersSectionProps) {
  const { investor, crobotp, oem } = PARTNER_LOGOS;

  return (
    <section className="mt-24 bg-background pb-24 sm:mt-32 sm:pb-32 lg:mt-40 lg:pb-40">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          <PartnerCard label={content.investorLabel}>
            <Image
              src={investor.src}
              alt={investor.alt}
              width={investor.width}
              height={investor.height}
              className="h-auto w-full max-w-[177px] object-contain"
            />
          </PartnerCard>

          <PartnerCard label={content.partnersLabel}>
            <Image
              src={crobotp.src}
              alt={crobotp.alt}
              width={crobotp.width}
              height={crobotp.height}
              className="h-auto w-full max-w-[212px] object-contain"
            />
          </PartnerCard>

          <PartnerCard className="lg:col-span-2" hideLabel>
            <ul className="flex w-full flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">
              {oem.map((logo) => (
                <li key={logo.alt}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-7 w-auto object-contain sm:h-8"
                  />
                </li>
              ))}
            </ul>
          </PartnerCard>
        </div>
      </Container>
    </section>
  );
}

function PartnerCard({
  label,
  children,
  className = "",
  hideLabel = false,
}: {
  label?: string;
  children: ReactNode;
  className?: string;
  hideLabel?: boolean;
}) {
  return (
    <article
      className={`flex min-h-[140px] flex-col items-center justify-center gap-6 rounded-lg border border-border-strong bg-surface px-8 py-10 sm:min-h-[160px] sm:px-10 sm:py-12 ${className}`}
    >
      {!hideLabel && label ? (
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          {label}
        </p>
      ) : null}
      {children}
    </article>
  );
}
