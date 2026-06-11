export type FooterMessages = {
  homeAriaLabel: string;
  description: string;
  navigateColumn: string;
  contactColumn: string;
  standardsColumn: string;
  footerNav: {
    industries: string;
    machinery: string;
    aboutUs: string;
  };
  standards: {
    title: string;
    body: string;
  };
  /** Use `{year}` as a placeholder for the current year. */
  copyright: string;
};
