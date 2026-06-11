import { SiteHeader } from "@/components/site/header";
import { MachineryHero } from "@/components/site/machinery/MachineryHero";
import { MachineryStatsSection } from "@/components/site/machinery/MachineryStatsSection";
import { FlagshipMachineSection } from "@/components/site/machinery/FlagshipMachineSection";
import { UMC1000MachineSection } from "@/components/site/machinery/UMC1000MachineSection";
import { MachineryVariantsSection } from "@/components/site/machinery/MachineryVariantsSection";
import { MachineryLathesSection } from "@/components/site/machinery/MachineryLathesSection";
import { MachineryAuxiliarySection } from "@/components/site/machinery/MachineryAuxiliarySection";
import { CtaSection } from "@/components/site/CtaSection";
import { Footer } from "@/components/site/Footer";
import { getMachineryMessages } from "@/messages/machinery";

type MachineryPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function MachineryPage({ params }: MachineryPageProps) {
  const { locale } = await params;
  const messages = getMachineryMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MachineryHero content={messages.hero} />
        <MachineryStatsSection content={messages.stats} />
        <FlagshipMachineSection content={messages.flagship} />
        <UMC1000MachineSection content={messages.umc1000} />
        <MachineryVariantsSection content={messages.variants} />
        <MachineryLathesSection content={messages.lathes} />
        <MachineryAuxiliarySection content={messages.auxiliary} />
        <CtaSection headline={messages.cta.headline} />
      </main>
      <Footer />
    </>
  );
}
