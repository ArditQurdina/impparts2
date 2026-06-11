import * as React from "react";
import type { ContactMessages } from "@/messages/contact";
import { PERSON_ASSETS } from "./contact-assets";

type TechnicalPersonnelProps = {
  content: ContactMessages["personnel"];
};

export function TechnicalPersonnel({ content }: TechnicalPersonnelProps) {
  return (
    <div className="flex flex-col gap-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
        {content.heading}
      </p>

      <ul className="flex flex-col">
        {content.people.map((person, index) => {
          const assets = PERSON_ASSETS[person.key];
          return (
            <li
              key={person.key}
              className={`flex flex-col gap-3 py-8 ${
                index === 0 ? "" : "border-t border-border-strong/30"
              }`}
            >
              <h3 className="font-display uppercase tracking-tight text-2xl sm:text-3xl">
                {assets.name}
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand">
                {person.role}
              </p>

              <dl className="mt-3 flex flex-col gap-2 text-sm">
                {assets.phones?.map((phone) => (
                  <ContactLine
                    key={phone}
                    letter="T"
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    value={phone}
                  />
                ))}
                {assets.email ? (
                  <ContactLine
                    letter="E"
                    href={`mailto:${assets.email}`}
                    value={assets.email}
                  />
                ) : null}
              </dl>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ContactLine({
  letter,
  href,
  value,
}: {
  letter: string;
  href: string;
  value: string;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand">
        {letter}
      </span>
      <a
        href={href}
        className="text-foreground transition-colors hover:text-brand"
      >
        {value}
      </a>
    </div>
  );
}
