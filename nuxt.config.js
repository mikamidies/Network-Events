export default {
  head: {
    title: "Network-App",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
  ],

  components: true,
  buildModules: [],

  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv", "nuxt-leaflet"],

  axios: {
    baseURL: process.env.BASE_URL,
  },
  // ssr: false,
  target: "server",
  server: {
    port: 3000,
    host: 'localhost',
  },
  build: {},
};
