export default {
  head: {
    title: "Justlink",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  css: ["@/assets/css/main.css"],
  plugins: [
    "@/plugins/antd-ui",
    "~/plugins/axios",
    "~/plugins/axios-instance",
    {
      src: "~plugins/vue-otp-input.js",
      ssr: false,
    },
    {
      src: "~plugins/v-mask.js",
      ssr: false,
    },
    { src: "~plugins/vue-drawer-layout.js", ssr: false },
  ],

  components: true,
  buildModules: [],

  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv", "nuxt-leaflet", "@nuxtjs/i18n",],
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en",
      },
      {
        code: "uz",
        iso: "uz",
      },
      {
        code: "ru",
        iso: "ru",
      },
    ],
    baseURL: process.env.BASE_URL,
    seo: true,
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "ru",
    },
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  // ssr: false,
  target: "server",
  server: {
    port: 8451,
    host: "0.0.0.0",
  },
  build: {},
};
