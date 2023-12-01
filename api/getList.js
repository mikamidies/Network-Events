export default {
  async getUser(config = {}) {
    const data = await $nuxt.$axios.$get("/newsqul", config);
    return data;
  },
};
