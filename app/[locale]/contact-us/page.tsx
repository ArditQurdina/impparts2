import { SiteHeader } from "@/components/site/header";
import { ContactHero } from "@/components/site/contact/ContactHero";
import { ContactSection } from "@/components/site/contact/ContactSection";
import { Footer } from "@/components/site/Footer";
import { getContactMessages } from "@/messages/contact";

type ContactUsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactUsPage({ params }: ContactUsPageProps) {
  const { locale } = await params;
  const messages = getContactMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactHero content={messages.hero} />
        <ContactSection form={messages.form} personnel={messages.personnel} />
      </main>
      <Footer />
    </>
  );
}
