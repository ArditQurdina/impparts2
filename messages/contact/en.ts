import type { ContactMessages } from "./types";

export const contactEn: ContactMessages = {
  hero: {
    eyebrow: "Connect with us",
    titleContact: "Contact",
    titleBrand: "IMP.",
    intro:
      "Engage with us early in your design process for cost-effective and quality production tailored to your specific technical requirements.",
  },
  form: {
    heading: "Direct Enquiry",
    name: { label: "Name", placeholder: "Enter your full name" },
    email: {
      label: "Email Address",
      placeholder: "name@example.com",
    },
    phone: { label: "Phone", placeholder: "+000 00 000 000" },
    message: {
      label: "Your Message",
      placeholder: "Describe your project requirements\u2026",
    },
    submit: "Submit Enquiry",
    submitting: "Sending\u2026",
    success: "Thank you — your enquiry has been sent. We\u2019ll be in touch soon.",
    error: "Something went wrong. Please try again or email us directly.",
  },
  personnel: {
    heading: "Technical Personnel",
    people: [
      { key: "albert", role: "Owner & Technical Director" },
      { key: "rroni", role: "Finance Manager" },
    ],
  },
};
