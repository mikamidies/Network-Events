export default {
  async getCommunity(config = {}) {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    if (ACCESS_TOKEN) {
      config['headers'] = {}
      config['headers']['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
    }
    return await $nuxt.$axios.get("/community", config);
  },
  async getCommunityById(config = {}) {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    if (ACCESS_TOKEN) {
      config.payload = {}
      config.payload['headers'] = {}
      config.payload['headers']['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
    }
    return await $nuxt.$axios.get(
      `/community/${config.id}`,
      config.payload
    );
  },
  async getClientById(config = {}) {
    return await $nuxt.$axios.get(
      `/members/${config.id}`,
      config.payload
    );
  },
  async getMembers(config = {}) {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    if (ACCESS_TOKEN) {
      // config.payload = {}
      config.payload['headers'] = {}
      config.payload['headers']['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
    }
    return await $nuxt.$axios.get(
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
  async postLeave(config = {}) {
    return await $nuxt.$axiosInstance.post(
      `/community/${config.id}/leave/`,
      config.payload
    );
  },
  async getMyCommunity(config = {}) {
    return await $nuxt.$axiosInstance.get("/community/my", config);
  },
  async getCategories(config = {}) {
    return await $nuxt.$axios.get("/community_types", config);
  },
};
