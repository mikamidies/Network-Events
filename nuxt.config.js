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

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: ["@/plugins/antd-ui", "~/plugins/axios", "~/plugins/axios-instance"],

  components: true,
  // server: {
  //   host: "localhost",
  //   port: 8000,
  // },
  buildModules: [],

  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: "/",
  },

  build: {},
};
