import Link from "next/link";
import { PlayCircle } from "@untitledui/icons";
import { Badge } from "@/components/ui/Badge";
import type { Jeu } from "@/lib/games";

export default function GameCard({ jeu }: { jeu: Jeu }) {
  const jouable = jeu.statut === "jouable";

  return (
    <Link
      href={`/jeux/${jeu.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-850 transition-all hover:-translate-y-0.5 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_-10px_var(--color-neon-cyan)]"
    >
      {/* Aperçu / vignette */}
      <div className="relative aspect-video w-full overflow-hidden bg-ink-800">
        {jeu.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={jeu.thumbnail}
            alt={`Aperçu de ${jeu.titre}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
            Aucune image
          </div>
        )}

        {!jouable && (
          <span className="absolute right-3 top-3">
            <Badge color="yellow">Bientôt</Badge>
          </span>
        )}
      </div>

      {/* Infos */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-gray-50">{jeu.titre}</h3>
        {jeu.eleve && (
          <p className="mt-0.5 text-sm text-gray-500">par {jeu.eleve}</p>
        )}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
          {jeu.description}
        </p>

        {jeu.tags && jeu.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {jeu.tags.map((tag) => (
              <Badge key={tag} color="gray">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {jouable && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-neon-cyan">
            <PlayCircle className="h-5 w-5" /> Jouer
          </span>
        )}
      </div>
    </Link>
  );
}
