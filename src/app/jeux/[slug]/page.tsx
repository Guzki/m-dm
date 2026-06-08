import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJeu, jeux } from "@/lib/games";
import { site } from "@/lib/site";

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
  if (!jeu) return { title: `Jeu introuvable — ${site.teacherName}` };
  return {
    title: `${jeu.titre} — ${site.teacherName}`,
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
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
      <Link
        href="/galerie"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
      >
        <span aria-hidden>←</span> Tous les jeux
      </Link>

      <header className="mt-6 mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          {jeu.titre}
        </h1>
        {jeu.eleve && <p className="mt-1 text-gray-500">par {jeu.eleve}</p>}
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
          {jeu.description}
        </p>
      </header>

      {jouable ? (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm">
          {/* Le jeu Godot exporté en HTML5 est chargé dans un iframe.
              Les fichiers se trouvent dans  public/exports/<slug>/  */}
          <iframe
            src={`/exports/${jeu.slug}/index.html`}
            title={jeu.titre}
            className="aspect-video w-full"
            allow="autoplay; fullscreen; gamepad"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center">
          <p className="text-lg font-medium text-gray-700">
            {`Ce jeu sera bientôt disponible.`}
          </p>
          <p className="max-w-sm text-sm text-gray-500">
            {`L'export n'est pas encore en ligne. Reviens plus tard pour y jouer.`}
          </p>
        </div>
      )}
    </main>
  );
}
