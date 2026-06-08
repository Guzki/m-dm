import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-stone-500">
        <p>
          Cours de {site.course} de {site.teacherName}
          {site.school ? ` — ${site.school}` : ""}.
        </p>
        {site.email && (
          <p className="mt-1">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-stone-800"
            >
              {site.email}
            </a>
          </p>
        )}
      </div>
    </footer>
  );
}
