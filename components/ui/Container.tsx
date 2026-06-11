import * as React from "react";
import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof React.JSX.IntrinsicElements;
};

export function Container({
  as: Tag = "div",
  className,
  ...rest
}: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1760px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20",
        className
      )}
      {...rest}
    />
  );
}
