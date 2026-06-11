import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { stripLocaleFromPathname } from "@/lib/i18n";
import {
  getRequestLocale,
  getRequestPathname,
  localizeHref,
} from "@/lib/i18n-server";
import { siteConfig, type SocialPlatform } from "@/lib/site-config";
import {
  formatCopyright,
  getFooterMessages,
  translateFooterNavItems,
} from "@/messages/footer";

export async function Footer() {
  const locale = await getRequestLocale();
  const pathname = await getRequestPathname();
  const messages = getFooterMessages(locale);
  const year = new Date().getFullYear();

  const homeHref = await localizeHref("/");
  const labeledNav = translateFooterNavItems(siteConfig.footerNav, messages);
  const footerNav = await Promise.all(
    labeledNav.map(async (item) => ({
      ...item,
      href: await localizeHref(item.href),
    }))
  );

  const strippedPath = stripLocaleFromPathname(pathname);
  const hideFooterNav =
    strippedPath === "/robotics" || strippedPath.startsWith("/robotics/");

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 lg:grid-cols-4 lg:gap-14 xl:gap-20">
          <div className="flex flex-col gap-7">
            <Link
              href={homeHref}
              aria-label={messages.homeAriaLabel}
              className="inline-flex transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/originalImpLogo.svg"
                alt={siteConfig.name}
                width={120}
                height={54}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-base leading-relaxed text-muted max-w-sm">
              {messages.description}
            </p>
          </div>

          {!hideFooterNav ? (
            <FooterColumn title={messages.navigateColumn}>
              <ul className="flex flex-col gap-4 text-base">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ) : null}

          <FooterColumn title={messages.contactColumn}>
            <ul className="flex flex-col gap-4 text-base text-muted">
              <li className="flex items-start gap-4">
                <PinIcon className="mt-0.5 text-brand shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-4">
                <PinIcon className="mt-0.5 text-brand shrink-0" />
                <span>Berlin, Germany</span>
              </li>
              {siteConfig.contact.map((channel) => {
                const href =
                  channel.kind === "email"
                    ? `mailto:${channel.value}`
                    : `tel:${channel.value.replace(/\s+/g, "")}`;
                const Icon = channel.kind === "email" ? MailIcon : PhoneIcon;
                return (
                  <li
                    key={`${channel.kind}-${channel.value}`}
                    className="flex items-start gap-4"
                  >
                    <Icon className="mt-0.5 text-brand shrink-0" />
                    <a
                      href={href}
                      className="break-all transition-colors hover:text-foreground"
                    >
                      {channel.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </FooterColumn>

          <FooterColumn title={messages.standardsColumn}>
            <div className="border border-border bg-surface/40 p-7">
              <h4 className="font-display text-brand text-xl uppercase tracking-[0.08em]">
                {messages.standards.title}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {messages.standards.body}
              </p>
            </div>
          </FooterColumn>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-6 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-subtle">
            {formatCopyright(messages.copyright, year)}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {siteConfig.social.map((s) => (
              <li key={s.platform}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.18em] text-subtle transition-colors hover:text-foreground"
                >
                  <SocialIcon platform={s.platform} />
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-muted">
        {title}
      </h3>
      {children}
    </div>
  );
}

type IconProps = { className?: string };

function PinIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const common = {
    "aria-hidden": "true" as const,
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "currentColor",
  };

  switch (platform) {
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5c0-1.2-.5-2-1.6-2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V9h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.6 1.3 3.6 4V19z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
  }
}
