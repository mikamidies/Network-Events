export default {
  async getSpecCategories(config = {}) {
    return await $nuxt.$axios.get("/specifications/categories", config);
  },
  async getSpecList(config = {}) {
    return await $nuxt.$axios.get("/specifications", config);
  },
};
