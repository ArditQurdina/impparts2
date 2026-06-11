import { SiteHeader } from "@/components/site/header";
import { IndustriesHero } from "@/components/site/industries/IndustriesHero";
import { DomainExpertiseSection } from "@/components/site/industries/DomainExpertiseSection";
import { CtaSection } from "@/components/site/CtaSection";
import { Footer } from "@/components/site/Footer";
import { getIndustriesMessages } from "@/messages/industries";

type IndustriesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function IndustriesPage({ params }: IndustriesPageProps) {
  const { locale } = await params;
  const messages = getIndustriesMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <IndustriesHero content={messages.hero} />
        <DomainExpertiseSection content={messages.domain} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
