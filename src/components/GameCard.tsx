import Link from "next/link";
import type { Jeu } from "@/lib/games";

export default function GameCard({ jeu }: { jeu: Jeu }) {
  const jouable = jeu.statut === "jouable";

  return (
    <Link
      href={`/jeux/${jeu.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors hover:border-amber-400"
    >
      {/* Aperçu / vignette */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
        {jeu.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={jeu.thumbnail}
            alt={`Aperçu de ${jeu.titre}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-5xl font-bold text-zinc-700">
            {jeu.titre.charAt(0)}
          </div>
        )}

        {!jouable && (
          <span className="absolute right-3 top-3 rounded-full bg-zinc-950/80 px-3 py-1 text-xs font-medium text-amber-400">
            Bientôt
          </span>
        )}
      </div>

      {/* Infos */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-amber-400">
          {jeu.titre}
        </h3>
        <p className="mt-1 text-sm text-zinc-400">par {jeu.eleve}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
          {jeu.description}
        </p>

        {jeu.tags && jeu.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {jeu.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-400"
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
