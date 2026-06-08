import type { Metadata } from "next";
import GameCard from "@/components/GameCard";
import { Badge } from "@/components/ui/Badge";
import { jeux } from "@/lib/games";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Les jeux des élèves — ${site.teacherName}`,
  description: `Jeux vidéo créés par les élèves du cours ${site.courseCode}.`,
};

export default function GaleriePage() {
  return (
    <main className="flex-1">
      <section className="border-b border-ink-700 bg-ink-900">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <Badge color="cyan">{site.courseCode}</Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
            Les jeux des élèves
          </h1>
          <p className="mt-3 max-w-2xl text-gray-400">
            {`Cliquez sur un jeu pour y jouer directement dans votre navigateur.`}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        {jeux.length === 0 ? (
          <p className="text-gray-500">
            {`Aucun jeu n'est encore en ligne. Revenez bientôt !`}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jeux.map((jeu) => (
              <GameCard key={jeu.slug} jeu={jeu} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
