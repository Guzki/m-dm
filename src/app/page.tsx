import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-zinc-950 px-6 py-20 text-zinc-100">
      <section className="max-w-2xl text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-amber-400">
          Enseignant en conception de jeux vidéo
        </p>
        <h1 className="mb-6 text-5xl font-bold sm:text-6xl">
          Bonjour, je suis M.&nbsp;DM.
        </h1>
        <p className="text-xl leading-relaxed text-zinc-300">
          J&apos;aide mes élèves à concevoir et à publier leur premier jeu
          vidéo. Découvrez la galerie, jouez aux projets des élèves et explorez
          nos créations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/galerie"
            className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
          >
            Voir la galerie de jeux
          </Link>
        </div>
      </section>
    </main>
  );
}
