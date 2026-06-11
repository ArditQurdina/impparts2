import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { ExpertiseSection } from "@/components/site/ExpertiseSection";
import { AdvantagesSection } from "@/components/site/AdvantagesSection";
import { LocationSection } from "@/components/site/LocationSection";
import { Footer } from "@/components/site/Footer";
import { getHomeMessages } from "@/messages/home";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const messages = getHomeMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero content={messages.hero} />
        <AboutSection content={messages.about} />
        <ExpertiseSection content={messages.expertise} />
        <AdvantagesSection content={messages.advantages} />
        <LocationSection content={messages.location} />
      </main>
      <Footer />
    </>
  );
}
