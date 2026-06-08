"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/galerie", label: "Les jeux" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-stone-200 bg-white">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold text-stone-900"
        >
          {site.teacherName}
        </Link>

        <ul className="flex items-center gap-6 text-sm">
          {liens.map((lien) => {
            const actif =
              lien.href === "/"
                ? pathname === "/"
                : pathname.startsWith(lien.href);
            return (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  className={
                    actif
                      ? "font-medium text-stone-900 underline underline-offset-4"
                      : "text-stone-600 transition-colors hover:text-stone-900"
                  }
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
