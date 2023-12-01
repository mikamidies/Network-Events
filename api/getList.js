export default {
  async getUser(config = {}) {
    const data = await $nuxt.$axios.$get("/news", config);
    return data;
  },
};
