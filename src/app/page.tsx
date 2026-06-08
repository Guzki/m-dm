import { ArrowRight, Feather, Rocket01, Stars01, Terminal } from "@untitledui/icons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const etapes = [
  {
    icone: Terminal,
    numero: "Projet 1",
    titre: "Un terminal personnalisé",
    description:
      "Premiers pas en programmation : lire des commandes, afficher du texte et construire la logique de base d'un programme.",
  },
  {
    icone: Feather,
    numero: "Projet 2",
    titre: "Flappy Bird",
    description:
      "Recréer un grand classique de l'arcade pour apprendre la gravité, les collisions, le pointage et la boucle de jeu.",
  },
  {
    icone: Rocket01,
    numero: "Projet 3",
    titre: "Un jeu original",
    description:
      "Concevoir et réaliser leur propre jeu, de la première idée jusqu'à une version jouable dans le navigateur.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Section d'accueil */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <div className="flex justify-center">
            <Badge color="brand">
              <Stars01 className="h-3.5 w-3.5" />
              {site.courseCode}
            </Badge>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Concevoir des jeux vidéo, un projet à la fois
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
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
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Le parcours du cours
            </h2>
            <p className="mt-3 text-gray-600">
              {`Trois projets, chacun plus ambitieux que le précédent, pour passer des bases de la programmation à un jeu complet.`}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {etapes.map((etape) => {
              const Icone = etape.icone;
              return (
                <div
                  key={etape.titre}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                    <Icone className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-sm font-medium text-brand-700">
                    {etape.numero}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {etape.titre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {etape.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appel à l'action — galerie */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl bg-brand-600 px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Découvrez ce qu&apos;ils ont créé
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-100">
              {`Jouez directement dans votre navigateur aux jeux réalisés par les élèves — il n'y a rien à télécharger.`}
            </p>
            <div className="mt-7 flex justify-center">
              <Button href="/galerie" variant="secondary">
                Voir la galerie
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {site.email && (
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12 text-center">
            <h2 className="text-xl font-semibold text-gray-900">Me joindre</h2>
            <p className="mt-2 text-gray-600">
              {"Pour toute question : "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-brand-700 hover:text-brand-800"
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
