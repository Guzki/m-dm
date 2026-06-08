import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJeu, jeux } from "@/lib/games";

// Prégénère une page pour chaque jeu au moment du build.
export function generateStaticParams() {
  return jeux.map((jeu) => ({ slug: jeu.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const jeu = getJeu(slug);
  if (!jeu) return { title: "Jeu introuvable — M. DM" };
  return {
    title: `${jeu.titre} — M. DM`,
    description: jeu.description,
  };
}

export default async function JeuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jeu = getJeu(slug);

  if (!jeu) notFound();

  const jouable = jeu.statut === "jouable";

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
      <Link
        href="/galerie"
        className="inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-amber-400"
      >
        ← Retour à la galerie
      </Link>

      <header className="mt-6 mb-8">
        <h1 className="text-3xl font-bold text-zinc-100 sm:text-4xl">
          {jeu.titre}
        </h1>
        <p className="mt-2 text-zinc-400">par {jeu.eleve}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">
          {jeu.description}
        </p>
      </header>

      {jouable ? (
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black">
          {/* Le jeu Godot exporté en HTML5 est chargé dans un iframe.
              Les fichiers se trouvent dans  public/exports/<slug>/  */}
          <iframe
            src={`/exports/${jeu.slug}/index.html`}
            title={jeu.titre}
            className="aspect-video w-full"
            allow="autoplay; fullscreen; gamepad; cross-origin-isolated"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 text-center">
          <p className="text-5xl">🎮</p>
          <p className="text-lg font-medium text-zinc-200">
            Ce jeu sera bientôt disponible&nbsp;!
          </p>
          <p className="max-w-sm text-sm text-zinc-400">
            L&apos;export du jeu n&apos;est pas encore en ligne. Reviens plus
            tard pour y jouer.
          </p>
        </div>
      )}
    </main>
  );
}
