import type { ReactNode } from "react";

type Color = "brand" | "gray";

const colors: Record<Color, string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand-200",
  gray: "bg-gray-50 text-gray-700 ring-gray-200",
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
