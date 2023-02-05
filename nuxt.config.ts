// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Brochure Site",
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image-edge"],
});
