export default {
  async getEvents(axios, config = {}) {
    return await axios.get("/events", config);
  },
  async getEventsById(config = {}) {
    return await $nuxt.$axiosInstance.get(
      `/events/${config.id}`,
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
};
