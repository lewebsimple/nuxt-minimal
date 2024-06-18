import { description } from "../../package.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: "~/app/components", pathPrefix: false }],
  runtimeConfig: {
    public: {
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || description,
    },
  },
});
