/**
 * Todas as páginas do site são estáticas, então ele roda como HTML puro.
 * `npm run build:static` liga o export e gera a pasta `out/` — é o modo usado
 * no deploy da Netlify. O `npm run build` normal segue disponível para quando
 * o projeto precisar de rota de API, middleware ou renderização no servidor.
 *
 * @type {import('next').NextConfig}
 */
const exportEstatico = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  ...(exportEstatico
    ? { output: "export", images: { unoptimized: true } }
    : { images: { formats: ["image/avif", "image/webp"] } }),
};

export default nextConfig;
