import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink-700 bg-ink-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <span>
          {site.courseCode} — {site.teacherName}
          {site.school ? ` · ${site.school}` : ""}
        </span>
        {site.email && (
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-gray-300"
          >
            {site.email}
          </a>
        )}
      </div>
    </footer>
  );
}
