import type { ContactMessages } from "./types";

export const contactAl: ContactMessages = {
  hero: {
    eyebrow: "Lidhuni me ne",
    titleContact: "Kontaktoni",
    titleBrand: "IMP.",
    intro:
      "Angazhohuni me ne herët në procesin e dizajnit për prodhim kosto-efektiv dhe cilësor të përshtatur me kërkesat tuaja teknike.",
  },
  form: {
    heading: "Kërkesë direkte",
    name: { label: "Emri", placeholder: "Shkruani emrin e plotë" },
    email: {
      label: "Adresa e emailit",
      placeholder: "emri@shembull.com",
    },
    phone: { label: "Telefoni", placeholder: "+000 00 000 000" },
    message: {
      label: "Mesazhi juaj",
      placeholder: "Përshkruani kërkesat e projektit tuaj\u2026",
    },
    submit: "Dërgo kërkesën",
    submitting: "Duke dërguar\u2026",
    success:
      "Faleminderit — kërkesa juaj u dërgua. Do t\u2019ju kontaktojmë së shpejti.",
    error:
      "Diçka shkoi keq. Provoni përsëri ose na shkruani direkt me email.",
  },
  personnel: {
    heading: "Stafi teknik",
    people: [
      { key: "albert", role: "Pronar & Drejtor Teknik" },
      { key: "rroni", role: "Menaxher Financiar" },
    ],
  },
};
