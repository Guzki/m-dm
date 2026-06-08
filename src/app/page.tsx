import { ArrowRight, Feather, Rocket01, Terminal } from "@untitledui/icons";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const etapes = [
  {
    icone: Terminal,
    numero: "Projet 1",
    titre: "Un terminal personnalisé",
    description:
      "Premiers pas en programmation : lire des commandes, afficher du texte et construire la logique de base d'un programme.",
    iconClass: "bg-neon-cyan/10 text-neon-cyan ring-neon-cyan/30",
    labelClass: "text-neon-cyan",
  },
  {
    icone: Feather,
    numero: "Projet 2",
    titre: "Flappy Bird",
    description:
      "Recréer un grand classique de l'arcade pour apprendre la gravité, les collisions, le pointage et la boucle de jeu.",
    iconClass: "bg-neon-magenta/10 text-neon-magenta ring-neon-magenta/30",
    labelClass: "text-neon-magenta",
  },
  {
    icone: Rocket01,
    numero: "Projet 3",
    titre: "Un jeu original",
    description:
      "Concevoir et réaliser leur propre jeu, de la première idée jusqu'à une version jouable dans le navigateur.",
    iconClass: "bg-neon-yellow/10 text-neon-yellow ring-neon-yellow/30",
    labelClass: "text-neon-yellow",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Section d'accueil */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(60% 120% at 18% 0%, rgba(34,224,255,0.14), transparent 60%), radial-gradient(60% 120% at 82% 0%, rgba(255,61,240,0.14), transparent 60%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
          <h1 className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Concevoir des jeux vidéo, un projet à la fois
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            {`Dans le cours ${site.courseCode}, les élèves découvrent les bases de la conception de jeux vidéo. Au fil de la session, ils réalisent trois projets de plus en plus ambitieux — d'un terminal en ligne de commande jusqu'à leur tout premier jeu original.`}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/galerie">
              Voir les jeux des élèves
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Le parcours */}
      <section className="border-y border-ink-700 bg-ink-900">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-3xl">
              Le parcours du cours
            </h2>
            <p className="mt-3 text-gray-400">
              {`Trois projets, chacun plus ambitieux que le précédent, pour passer des bases de la programmation à un jeu complet.`}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {etapes.map((etape) => {
              const Icone = etape.icone;
              return (
                <div
                  key={etape.titre}
                  className="rounded-2xl border border-ink-700 bg-ink-850 p-6"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ${etape.iconClass}`}
                  >
                    <Icone className="h-6 w-6" />
                  </span>
                  <p className={`mt-4 text-sm font-medium ${etape.labelClass}`}>
                    {etape.numero}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-50">
                    {etape.titre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {etape.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appel à l'action — galerie */}
      <section className="bg-ink-950">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-yellow p-px shadow-[0_0_50px_-16px_rgba(255,61,240,0.5)]">
            <div className="rounded-[15px] bg-ink-900 px-6 py-12 text-center sm:px-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-3xl">
                Découvrez ce qu&apos;ils ont créé
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-400">
                {`Jouez directement dans votre navigateur aux jeux réalisés par les élèves — il n'y a rien à télécharger.`}
              </p>
              <div className="mt-7 flex justify-center">
                <Button href="/galerie">
                  Voir la galerie
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {site.email && (
        <section className="border-t border-ink-700 bg-ink-950">
          <div className="mx-auto max-w-5xl px-6 py-12 text-center">
            <h2 className="text-xl font-semibold text-gray-50">Me joindre</h2>
            <p className="mt-2 text-gray-400">
              {"Pour toute question : "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-neon-cyan hover:brightness-110"
              >
                {site.email}
              </a>
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
