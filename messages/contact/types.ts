export type PersonKey = "albert" | "rroni";

export type FormFieldCopy = {
  label: string;
  placeholder: string;
};

export type ContactMessages = {
  hero: {
    eyebrow: string;
    titleContact: string;
    titleBrand: string;
    intro: string;
  };
  form: {
    heading: string;
    name: FormFieldCopy;
    email: FormFieldCopy;
    phone: FormFieldCopy;
    message: FormFieldCopy;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  personnel: {
    heading: string;
    people: { key: PersonKey; role: string }[];
  };
};
