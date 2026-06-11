import type { PersonKey } from "@/messages/contact";

/** Names and contact details — never localized. */
export const PERSON_ASSETS: Record<
  PersonKey,
  { name: string; phones?: string[]; email?: string }
> = {
  albert: {
    name: "Albert Mushkolaj",
    phones: ["+383 49 179 105"],
    email: "a.mushkolaj@impparts.com",
  },
  rroni: {
    name: "Rroni Kameri",
    phones: ["+383 49 959 889", "+49 176 36145748"],
    email: "rr.kameri@impparts.com",
  },
};
