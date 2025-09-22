
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour l'export statique
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  eslint: {
    // Disable ESLint during builds to prevent unescaped entity errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Keep TypeScript checking enabled
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
