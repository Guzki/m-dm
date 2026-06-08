# Jeux des élèves (exports Godot HTML5)

Chaque jeu va dans son propre dossier ici, nommé d'après son « slug ».

```
public/exports/
  kings-and-pigs/
    index.html        <- export Godot (point d'entrée)
    index.js
    index.wasm
    index.pck
    index.audio.worklet.js   (selon l'export)
    thumbnail.png     <- image d'aperçu pour la carte (optionnel)
  aventure-foret/
    ...
```

## Étapes

1. Dans Godot : **Projet → Exporter…**, preset **Web**.
2. Choisir comme nom de fichier d'export `index.html` et l'enregistrer dans
   `public/exports/<slug>/` (créer le dossier au besoin).
3. Ajouter (ou ajuster) l'entrée correspondante dans `src/lib/games.ts`
   en mettant `statut: "jouable"`.
4. (Optionnel) déposer une `thumbnail.png` dans le même dossier et décommenter
   le champ `thumbnail` dans `src/lib/games.ts`.

Le slug du dossier doit être identique au `slug` dans `src/lib/games.ts`.

> ⚠️ Les exports vont dans `public/exports/` (et **non** `public/jeux/`) pour
> éviter un conflit d'URL avec les pages `/jeux/<slug>` sur l'hébergement
> statique (GitHub Pages).
