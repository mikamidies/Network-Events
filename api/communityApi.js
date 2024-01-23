export default {
  async getCommunity(config = {}) {
    return await $nuxt.$axiosInstance.get("/community", config);
  },
  async getCommunityById(config = {}) {
    return await $nuxt.$axiosInstance.get(
      `/community/${config.id}`,
      config.payload
    );
  },
  async getClientById(config = {}) {
    return await $nuxt.$axiosInstance.get(
      `/members/${config.id}`,
      config.payload
    );
  },
  async getMembers(config = {}) {
    return await $nuxt.$axiosInstance.get(
      `/community/${config.id}/members`,
      config.payload
    );
  },
  async postEvent(config = {}) {
    return await $nuxt.$axiosInstance.post(
      `/community/${config.id}/join`,
      config.payload
    );
  },
  async getMyCommunity(config = {}) {
    return await $nuxt.$axiosInstance.get("/community/my", config);
  },
  async getCategories(config = {}) {
    return await $nuxt.$axios.get("/crm/categories", config);
  },
};
