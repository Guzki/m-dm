"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationHat01 } from "@untitledui/icons";
import { site } from "@/lib/site";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/galerie", label: "Les jeux" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <GraduationHat01 className="h-5 w-5" />
          </span>
          <span className="font-semibold text-gray-900">{site.teacherName}</span>
        </Link>

        <ul className="flex items-center gap-1 text-sm font-medium">
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
                      ? "bg-brand-50 text-brand-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
