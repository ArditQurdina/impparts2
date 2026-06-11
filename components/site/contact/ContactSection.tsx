import * as React from "react";
import { Container } from "@/components/ui/Container";
import type { ContactMessages } from "@/messages/contact";
import { ContactForm } from "./ContactForm";
import { TechnicalPersonnel } from "./TechnicalPersonnel";

type ContactSectionProps = {
  form: ContactMessages["form"];
  personnel: ContactMessages["personnel"];
};

export function ContactSection({ form, personnel }: ContactSectionProps) {
  return (
    <section className="pb-24 sm:pb-32 lg:pb-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-border-strong/40">
          <div className="py-14 lg:py-16 lg:pr-16 xl:pr-24 lg:border-r lg:border-border-strong/40">
            <ContactForm content={form} />
          </div>

          <div className="bg-[#0D1012] py-14 px-8 sm:px-10 lg:py-16 lg:pl-16 xl:pl-24 border-t border-border-strong/40 lg:border-t-0">
            <TechnicalPersonnel content={personnel} />
          </div>
        </div>
      </Container>
    </section>
  );
}
