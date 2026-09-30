import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "ghostSolid";
  size?: "md" | "lg";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 will-change-transform active:translate-y-0";

const variants: Record<string, string> = {
  primary:
    "bg-copper text-paper border border-copper hover:bg-copper-dark hover:border-copper-dark hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink hover:text-paper hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-paper border border-paper/30 hover:border-paper hover:bg-paper/10 hover:-translate-y-0.5",
  ghostSolid:
    "bg-paper text-ink border border-paper hover:bg-copper hover:border-copper hover:text-paper hover:-translate-y-0.5 hover:shadow-ink",
};

const sizes: Record<string, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-sm sm:text-base",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    const [pathname, hash] = to.split("#");
    const hashProps = hash ? { hash } : {};
    return (
      <Link to={(pathname || "/") as "/"} {...hashProps} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
