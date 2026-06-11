import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/cn";

type ImageCardProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  imageAlt?: string;
  href?: string;
  className?: string;
};

export function ImageCard({
  title,
  description,
  image,
  imageAlt = "",
  href,
  className,
}: ImageCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn(
        "group relative block overflow-hidden bg-surface aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]",
        href && "cursor-pointer",
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="relative flex h-full flex-col p-7 sm:p-8 lg:p-10">
        <h3 className="font-display uppercase leading-[0.95] tracking-tight text-foreground text-3xl sm:text-4xl lg:text-4xl xl:text-5xl">
          {title}
        </h3>

        <p className="mt-auto min-h-[8rem] max-w-[28ch] text-sm sm:text-[15px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground">
          {description}
        </p>
      </div>
    </Wrapper>
  );
}
