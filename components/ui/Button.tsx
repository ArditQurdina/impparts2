import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-mono font-medium whitespace-nowrap " +
  "transition-colors duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-brand text-foreground hover:bg-brand-600 active:bg-brand-700",
  secondary:
    "rounded-full bg-surface text-foreground border border-border hover:bg-surface-2 hover:border-border-strong",
  outline:
    "bg-transparent text-brand border border-brand hover:bg-brand hover:text-foreground",
  ghost: "rounded-full bg-transparent text-foreground hover:bg-surface",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = ButtonOwnProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.as === "a") {
    const { as: _as, ...anchorProps } = rest as ButtonAsAnchor;
    void _as;
    return <a className={classes} {...anchorProps} />;
  }

  const { as: _as, ...buttonProps } = rest as ButtonAsButton;
  void _as;
  return <button className={classes} {...buttonProps} />;
}
