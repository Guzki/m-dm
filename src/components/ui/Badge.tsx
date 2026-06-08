import type { ReactNode } from "react";

type Color = "cyan" | "magenta" | "yellow" | "gray";

const colors: Record<Color, string> = {
  cyan: "bg-neon-cyan/10 text-neon-cyan ring-neon-cyan/30",
  magenta: "bg-neon-magenta/10 text-neon-magenta ring-neon-magenta/30",
  yellow: "bg-neon-yellow/10 text-neon-yellow ring-neon-yellow/30",
  gray: "bg-white/5 text-gray-300 ring-white/10",
};

export function Badge({
  color = "gray",
  children,
}: {
  color?: Color;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${colors[color]}`}
    >
      {children}
    </span>
  );
}
