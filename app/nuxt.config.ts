import { description } from "../package.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { path: "~/app/components", pathPrefix: false },
    { path: "~/app/assets/svg", extensions: ["svg"], prefix: "Svg" },
  ],
  modules: ["@lewebsimple/nuxt3-svg"],
  runtimeConfig: {
    public: {
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || description,
    },
  },
});
