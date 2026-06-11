import { localizeHref, getRequestLocale, getRequestPathname } from "@/lib/i18n-server";
import { stripLocaleFromPathname } from "@/lib/i18n";
import { siteConfig, type NavItem, type SiteConfig } from "@/lib/site-config";
import { getNavMessages, translateNavItems } from "@/messages/nav";
import { HeaderShell } from "./HeaderShell";
import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";

async function localizeNavItems(items: NavItem[]): Promise<NavItem[]> {
  return Promise.all(
    items.map(async (item) =>
      item.external
        ? item
        : { ...item, href: await localizeHref(item.href) }
    )
  );
}

type SiteHeaderProps = {
  /**
   * Optional override. Defaults to the global `siteConfig` so callers
   * can drop `<SiteHeader />` in without wiring anything, but tests
   * and Storybook can pass a custom config.
   */
  config?: SiteConfig;
};

/**
 * Top-level site chrome: utility bar + primary navigation.
 *
 * This is the only component consumers should import. Internal structure
 * (TopBar, MainNav, Logo, NavLinks, ...) is an implementation detail.
 */
export async function SiteHeader({ config = siteConfig }: SiteHeaderProps = {}) {
  const locale = await getRequestLocale();
  const pathname = await getRequestPathname();
  const nav = getNavMessages(locale);
  const labeledNav = translateNavItems(config.primaryNav, nav);
  const strippedPath = stripLocaleFromPathname(pathname);
  const isRoboticsRoute = strippedPath.startsWith("/robotics");
  const isContactUsRoute = strippedPath === "/contact-us";

  const rewrittenNav = isContactUsRoute
    ? labeledNav.map((item) => {
        if (item.href === "/") return { ...item, href: "/robotics" };
        if (item.href === "/contact") return { ...item, href: "/contact-us" };
        return item;
      })
    : isRoboticsRoute
    ? labeledNav.map((item) =>
        item.href === "/contact"
          ? { ...item, href: "/contact-us" }
          : item,
      )
    : labeledNav;

  const [primaryNav, brandHref] = await Promise.all([
    localizeNavItems(rewrittenNav),
    localizeHref(isContactUsRoute ? "/robotics" : "/"),
  ]);

  return (
    <HeaderShell>
      <TopBar locales={config.locales} contact={config.contact} />
      <MainNav
        brand={{ name: config.name, tagline: config.tagline, href: brandHref }}
        items={primaryNav}
      />
    </HeaderShell>
  );
}
