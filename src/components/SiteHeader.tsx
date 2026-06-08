"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/galerie", label: "Galerie de jeux" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold text-zinc-100 transition-colors hover:text-amber-400"
        >
          M. DM <span className="text-amber-400">·</span>{" "}
          <span className="font-normal text-zinc-400">Conception de jeux</span>
        </Link>

        <ul className="flex items-center gap-1 text-sm">
          {liens.map((lien) => {
            const actif =
              lien.href === "/"
                ? pathname === "/"
                : pathname.startsWith(lien.href);
            return (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  className={`rounded-lg px-3 py-2 transition-colors ${
                    actif
                      ? "bg-zinc-800 text-amber-400"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
                  }`}
                >
                  {lien.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
