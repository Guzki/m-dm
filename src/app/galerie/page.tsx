import type { Metadata } from "next";
import GameCard from "@/components/GameCard";
import { jeux } from "@/lib/games";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Les jeux des élèves — ${site.teacherName}`,
  description: `Jeux vidéo créés par les élèves du cours de ${site.course}.`,
};

export default function GaleriePage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <h1 className="font-serif text-3xl font-semibold text-stone-900">
        Les jeux des élèves
      </h1>
      <p className="mt-3 text-stone-600">
        Cliquez sur un jeu pour y jouer dans votre navigateur.
      </p>

      {jeux.length === 0 ? (
        <p className="mt-10 text-stone-500">
          Aucun jeu n&apos;est encore en ligne. Revenez bientôt&nbsp;!
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jeux.map((jeu) => (
            <GameCard key={jeu.slug} jeu={jeu} />
          ))}
        </div>
      )}
    </main>
  );
}
