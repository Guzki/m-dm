import { GraduationHat01 } from "@untitledui/icons";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink-700 bg-ink-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta text-ink-950">
            <GraduationHat01 className="h-4 w-4" />
          </span>
          <span>
            {site.courseCode} — {site.teacherName}
            {site.school ? ` · ${site.school}` : ""}
          </span>
        </div>
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
