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
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
      <Link
        href="/galerie"
        className="text-sm text-blue-700 underline underline-offset-2 hover:text-blue-900"
      >
        ← Tous les jeux
      </Link>

      <header className="mt-6 mb-8">
        <h1 className="font-serif text-3xl font-semibold text-stone-900">
          {jeu.titre}
        </h1>
        {jeu.eleve && <p className="mt-1 text-stone-500">par {jeu.eleve}</p>}
        <p className="mt-4 max-w-2xl leading-relaxed text-stone-700">
          {jeu.description}
        </p>
      </header>

      {jouable ? (
        <div className="overflow-hidden rounded-lg border border-stone-200 bg-black">
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
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 bg-stone-50 text-center">
          <p className="text-lg font-medium text-stone-700">
            Ce jeu sera bientôt disponible.
          </p>
          <p className="max-w-sm text-sm text-stone-500">
            L&apos;export n&apos;est pas encore en ligne. Reviens plus tard pour
            y jouer.
          </p>
        </div>
      )}
    </main>
  );
}
