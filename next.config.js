/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "experimental-edge",
  },
  i18n: {
    locales: ['es-ES','en-US'],
    defaultLocale: 'es-ES'
  },
}

module.exports = nextConfig
