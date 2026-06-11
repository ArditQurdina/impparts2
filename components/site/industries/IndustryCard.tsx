import Image from "next/image";
import { cn } from "@/lib/cn";

type IndustryCardProps = {
  title: string;
  /** Path to the line-art icon SVG (e.g. /images/civil.svg). */
  icon: string;
  image: string;
  imageAlt?: string;
  className?: string;
};

export function IndustryCard({
  title,
  icon,
  image,
  imageAlt = "",
  className,
}: IndustryCardProps) {
  return (
    <div
      className={cn(
        "group relative block overflow-hidden border border-border-strong aspect-[3/4]",
        "transition-colors duration-300 hover:bg-surface-2",
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-background/50 sm:bg-background/90 transition-colors duration-300 sm:group-hover:bg-background/5" />
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-5">
        <Image
          src={icon}
          alt=""
          width={64}
          height={64}
          aria-hidden
          className="h-14 w-14 sm:h-16 sm:w-16 opacity-90"
        />
        <span className="text-base sm:text-lg font-medium text-foreground">
          {title}
        </span>
      </div>
    </div>
  );
}
