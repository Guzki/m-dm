import Link from "next/link";
import type { Jeu } from "@/lib/games";

export default function GameCard({ jeu }: { jeu: Jeu }) {
  const jouable = jeu.statut === "jouable";

  return (
    <Link
      href={`/jeux/${jeu.slug}`}
      className="group block overflow-hidden rounded-lg border border-stone-200 bg-white transition-colors hover:border-stone-400"
    >
      {/* Aperçu / vignette */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-stone-200 bg-stone-100">
        {jeu.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={jeu.thumbnail}
            alt={`Aperçu de ${jeu.titre}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-stone-400">
            Aucune image
          </div>
        )}

        {!jouable && (
          <span className="absolute right-2 top-2 rounded bg-white/90 px-2 py-0.5 text-xs font-medium text-stone-600 ring-1 ring-stone-200">
            Bientôt
          </span>
        )}
      </div>

      {/* Infos */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:underline">
          {jeu.titre}
        </h3>
        {jeu.eleve && (
          <p className="mt-0.5 text-sm text-stone-500">par {jeu.eleve}</p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          {jeu.description}
        </p>

        {jeu.tags && jeu.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {jeu.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
