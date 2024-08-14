export default {
  async getEvents(axios, config = {}) {
    const ACCESS_TOKEN = localStorage.getItem("accessToken");
    if (ACCESS_TOKEN) {
      config["headers"] = {};
      config["headers"]["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
    }
    return await $nuxt.$axios.get("/events", config);
  },
  async getEventsById(config = {}) {
    const ACCESS_TOKEN = localStorage.getItem("accessToken");
    if (ACCESS_TOKEN) {
      config.payload = {};
      config.payload["headers"] = {};
      config.payload["headers"]["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
    }
    return await $nuxt.$axios.get(`/events/${config.id}`, config.payload);
  },
  async getClientById(config = {}) {
    return await $nuxt.$axios.get(`/members/${config.id}`, config.payload);
  },
  async getAllMembers(search = null) {
    return await $nuxt.$axiosInstance.get("/members?search=" + search);
  },
  async getMembers(config = {}) {
    const ACCESS_TOKEN = localStorage.getItem("accessToken");
    if (ACCESS_TOKEN) {
      config.payload = {};
      config.payload["headers"] = {};
      config.payload["headers"]["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
    }
    return await $nuxt.$axios.get(
      `/events/${config.id}/members`,
      config.payload
    );
  },
  async postEvent(config = {}) {
    return await $nuxt.$axiosInstance.post(
      `/events/${config.id}/join`,
      config.payload
    );
  },
  async getMyEvents(config = {}) {
    return await $nuxt.$axiosInstance.get("/events/my", config);
  },
  async getCategories(config = {}) {
    return await $nuxt.$axios.get("/categories", config);
  },
};
