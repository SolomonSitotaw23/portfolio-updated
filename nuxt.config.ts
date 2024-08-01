// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  css: ["assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-splide",
    "@vee-validate/nuxt",
    "nuxt-anchorscroll",
    "@hypernym/nuxt-anime",
  ],
  anime: {
    provide: true,
  },

  compatibilityDate: "2024-07-20",
});
