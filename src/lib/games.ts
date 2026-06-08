// Liste des jeux des élèves.
//
// Pour ajouter un jeu :
//   1. Exporter le jeu Godot en HTML5 dans  public/exports/<slug>/
//      (le dossier doit contenir index.html, le .wasm, le .pck, etc.)
//   2. Déposer une image d'aperçu dans      public/exports/<slug>/thumbnail.png
//   3. Ajouter une entrée ci-dessous avec le même « slug ».
//
// Mettre « statut » à "jouable" une fois l'export en place, sinon "bientot".

export type StatutJeu = "jouable" | "bientot";

export type Jeu = {
  slug: string; // identifiant dans l'URL et nom du dossier dans public/exports/
  titre: string;
  eleve?: string; // nom de l'élève / équipe (optionnel — vérifier le consentement avant de publier un nom)
  description: string;
  tags?: string[];
  thumbnail?: string; // chemin de l'image d'aperçu
  statut: StatutJeu;
};

export const jeux: Jeu[] = [
  {
    slug: "kings-and-pigs",
    titre: "Kings and Pigs",
    // eleve: "Prénom N.", // ← ajouter le nom de l'élève une fois le consentement obtenu
    description:
      "Le projet final : un jeu de plateforme original. Aide le roi à traverser les niveaux, ramasse les pièces et évite les cochons.",
    tags: ["Projet final", "Plateforme"],
    thumbnail: "/exports/kings-and-pigs/index.png",
    statut: "jouable",
  },
  {
    slug: "flappy-clone",
    titre: "Flappy Bird",
    description:
      "Recréation du grand classique de l'arcade, réalisée en classe pour apprendre la gravité, les collisions et le pointage.",
    tags: ["Projet de classe", "Arcade"],
    thumbnail: "/exports/flappy-clone/index.png",
    statut: "jouable",
  },
  {
    slug: "jeux-regret-et-tristesse",
    titre: "Regret et tristesse",
    description:
      " Le regret est la tristesse que j'ai ressentie durant ce cours.",
    tags: ["Projet de classe", "Arcade"],
    thumbnail: "/exports/jeux-regret-et-tristesse/index.png",
    statut: "jouable",
  },
];

export function getJeu(slug: string): Jeu | undefined {
  return jeux.find((jeu) => jeu.slug === slug);
}
