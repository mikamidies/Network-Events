export default {
  async getEvents(axios, config = {}) {
    return await axios.get("/events", config);
  },
  async getEventsById(axios, config = {}) {
    return await axios.get(
      `https://networking.pythonanywhere.com/api/events/${config.id}`,
      config.payload
    );
  },
  async getMembers(axios, config = {}) {
    return await axios.get(`/events/${config.id}/members`, config);
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
