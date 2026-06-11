"use client";

import { cn } from "@/lib/cn";
import { useHeaderTone } from "./HeaderShell";
import type { ContactChannel } from "@/lib/site-config";

type ContactLinksProps = {
  channels: ContactChannel[];
  className?: string;
};

function hrefFor(channel: ContactChannel): string {
  switch (channel.kind) {
    case "email":
      return `mailto:${channel.value}`;
    case "phone":
      return `tel:${channel.value.replace(/\s+/g, "")}`;
  }
}

export function ContactLinks({ channels, className }: ContactLinksProps) {
  const tone = useHeaderTone();
  const isLight = tone === "light";

  return (
    <ul
      className={cn(
        "flex items-center gap-6 text-xs font-medium",
        isLight ? "text-zinc-500" : "text-muted",
        className
      )}
    >
      {channels.map((channel) => (
        <li key={`${channel.kind}-${channel.value}`}>
          <a
            href={hrefFor(channel)}
            className={cn(
              "transition-colors",
              isLight ? "hover:text-zinc-900" : "hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
              isLight
                ? "focus-visible:ring-offset-white"
                : "focus-visible:ring-offset-header"
            )}
          >
            {channel.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
