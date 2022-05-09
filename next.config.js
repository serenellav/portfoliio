/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['serenellavezzi.altervista.org','serenellavezzi.vercel.app']
  },
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
}

module.exports = nextConfig
