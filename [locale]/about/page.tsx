import { SiteHeader } from "@/components/site/header";
import { AboutHero } from "@/components/site/about/AboutHero";
import { RootedInKosovoSection } from "@/components/site/about/RootedInKosovoSection";
import { CommitmentSection } from "@/components/site/about/CommitmentSection";
import { Footer } from "@/components/site/Footer";
import { ExperienceSection } from "@/components/site/about/ExperienceSection";
import { getAboutMessages } from "@/messages/about";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const messages = getAboutMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutHero content={messages.hero} />
        <RootedInKosovoSection content={messages.kosovo} />
        <CommitmentSection content={messages.commitment} />
        <ExperienceSection content={messages.experience} />
      </main>
      <Footer />
    </>
  );
}
