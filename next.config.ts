import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Génère un site 100 % statique dans  out/  (next build).
  // Nécessaire pour l'hébergement sur GitHub Pages.
  output: "export",

  // GitHub Pages ne fait pas l'optimisation d'images de Next.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
