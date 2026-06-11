import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getRequestLocale, localizeHref } from "@/lib/i18n-server";
import { getCtaMessages } from "@/messages/cta";

type CtaAction = {
  label: string;
  href: string;
  /** When true, opens in a new tab (used e.g. for the PDF download). */
  download?: boolean;
};

type CtaSectionProps = {
  /** Override the default headline. */
  headline?: string;
  /** Primary CTA — solid white pill. */
  primaryAction?: CtaAction;
  /** Secondary CTA — outline pill. */
  secondaryAction?: CtaAction;
};

export async function CtaSection({
  headline,
  primaryAction,
  secondaryAction,
}: CtaSectionProps) {
  const locale = await getRequestLocale();
  const messages = getCtaMessages(locale);
  const resolvedHeadline = headline ?? messages.headline;

  const [primary, secondary] = await Promise.all([
    primaryAction
      ? localizeHref(primaryAction.href).then((href) => ({
          ...primaryAction,
          href,
        }))
      : Promise.resolve(undefined),
    secondaryAction
      ? localizeHref(secondaryAction.href).then((href) => ({
          ...secondaryAction,
          href,
        }))
      : Promise.resolve(undefined),
  ]);

  const hasActions = Boolean(primary || secondary);

  return (
    <section className="mt-24 sm:mt-32 lg:mt-40 bg-brand">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div
          className={
            hasActions
              ? "flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between"
              : "max-w-3xl"
          }
        >
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground max-w-lg lg:max-w-2xl">
            {resolvedHeadline}
          </h2>

          {hasActions ? (
            <div className="flex flex-wrap gap-4 sm:gap-5">
              {primary ? <CtaPrimary {...primary} /> : null}
              {secondary ? <CtaSecondary {...secondary} /> : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

type CtaActionProps = {
  label: string;
  href: string;
  download?: boolean;
};

function CtaPrimary({ label, href, download }: CtaActionProps) {
  const isExternal = download || href.startsWith("http");
  const className =
    "inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-[0.24em] " +
    "bg-foreground text-brand px-8 py-5 transition-colors duration-200 " +
    "hover:bg-foreground/90";

  if (isExternal) {
    return (
      <a
        href={href}
        target={download ? "_blank" : undefined}
        rel={download ? "noopener noreferrer" : undefined}
        download={download}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function CtaSecondary({ label, href, download }: CtaActionProps) {
  const isExternal = download || href.startsWith("http");
  const className =
    "inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-[0.24em] " +
    "border border-foreground/40 text-foreground px-8 py-5 transition-colors duration-200 " +
    "hover:bg-foreground hover:text-brand hover:border-foreground";

  if (isExternal) {
    return (
      <a
        href={href}
        target={download ? "_blank" : undefined}
        rel={download ? "noopener noreferrer" : undefined}
        download={download}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
