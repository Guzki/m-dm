import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-neon-cyan text-ink-950 shadow-[0_0_24px_-6px_var(--color-neon-cyan)] hover:brightness-110 hover:shadow-[0_0_32px_-4px_var(--color-neon-cyan)]",
  secondary:
    "bg-transparent text-gray-100 ring-1 ring-inset ring-ink-600 hover:bg-white/5 hover:text-neon-cyan hover:ring-neon-cyan/60",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return <button className={cls}>{children}</button>;
}
