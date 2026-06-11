import { SiteHeader } from "@/components/site/header";
import { RoboticsHero } from "@/components/site/robotics/RoboticsHero";
import { RoboticsStatsBar } from "@/components/site/robotics/RoboticsStatsBar";
import { SolutionsSection } from "@/components/site/robotics/SolutionsSection";
import { RoboticsExpertiseSection } from "@/components/site/robotics/RoboticsExpertiseSection";
import { RoboticsImpactSection } from "@/components/site/robotics/RoboticsImpactSection";
import { RoboticsPartnersSection } from "@/components/site/robotics/RoboticsPartnersSection";
import { Footer } from "@/components/site/Footer";
import { getRoboticsMessages } from "@/messages/robotics";

type RoboticsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function RoboticsPage({ params }: RoboticsPageProps) {
  const { locale } = await params;
  const messages = getRoboticsMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <RoboticsHero content={messages.hero} />
        <RoboticsStatsBar content={messages.stats} />
        <SolutionsSection content={messages.solutions} />
        <RoboticsExpertiseSection content={messages.expertise} />
        <RoboticsPartnersSection content={messages.partners} />
        <RoboticsImpactSection content={messages.impact} />
      </main>
      <Footer />
    </>
  );
}
