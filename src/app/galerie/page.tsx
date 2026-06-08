import type { Metadata } from "next";
import GameCard from "@/components/GameCard";
import { jeux } from "@/lib/games";

export const metadata: Metadata = {
  title: "Galerie de jeux — M. DM",
  description:
    "Découvrez et jouez aux jeux vidéo conçus par les élèves du cours de conception de jeux.",
};

export default function GaleriePage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <header className="mb-12 text-center">
        <p className="mb-3 text-sm uppercase tracking-widest text-amber-400">
          Projets des élèves
        </p>
        <h1 className="text-4xl font-bold text-zinc-100 sm:text-5xl">
          Galerie de jeux
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
          Voici les jeux créés par mes élèves avec Godot. Cliquez sur un jeu
          pour y jouer directement dans votre navigateur.
        </p>
      </header>

      {jeux.length === 0 ? (
        <p className="text-center text-zinc-400">
          Aucun jeu pour le moment. Revenez bientôt&nbsp;!
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jeux.map((jeu) => (
            <GameCard key={jeu.slug} jeu={jeu} />
          ))}
        </div>
      )}
    </main>
  );
}
