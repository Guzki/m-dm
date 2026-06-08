import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-stone-900">
        Bienvenue
      </h1>

      <div className="mt-6 space-y-4 text-lg leading-relaxed text-stone-700">
        <p>
          Je m&apos;appelle {site.teacherName} et j&apos;enseigne la{" "}
          {site.course}
          {site.school ? ` à ${site.school}` : ""}. Dans mon cours, les élèves
          apprennent à imaginer, concevoir et programmer leurs propres jeux
          vidéo avec le moteur Godot.
        </p>
        <p>
          Ce site rassemble les jeux qu&apos;ils ont créés. Cliquez sur un jeu
          pour y jouer directement dans votre navigateur — il n&apos;y a rien à
          télécharger.
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/galerie"
          className="inline-block rounded-md bg-stone-900 px-5 py-2.5 font-medium text-white transition-colors hover:bg-stone-700"
        >
          Voir les jeux des élèves
        </Link>
      </div>

      <section className="mt-16 border-t border-stone-200 pt-10">
        <h2 className="font-serif text-2xl font-semibold text-stone-900">
          À propos du cours
        </h2>
        <p className="mt-4 leading-relaxed text-stone-700">
          {site.gradeLevels ? `Offert en ${site.gradeLevels}, ce` : "Ce"} cours
          initie les élèves à la création de jeux vidéo : conception, art,
          programmation et mise au point. Chaque projet est réalisé avec Godot,
          un moteur de jeu gratuit et libre, puis publié ici pour que la classe
          — et la maison — puisse y jouer.
        </p>
      </section>

      {site.email && (
        <section className="mt-12 border-t border-stone-200 pt-10">
          <h2 className="font-serif text-2xl font-semibold text-stone-900">
            Me joindre
          </h2>
          <p className="mt-4 text-stone-700">
            Pour toute question, écrivez-moi à{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              {site.email}
            </a>
            .
          </p>
        </section>
      )}
    </main>
  );
}
