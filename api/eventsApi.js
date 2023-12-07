export default {
  async getEvents(config = {}) {
    return await $nuxt.$axios.get("/events", config);
  },
  async getEventsById(config = {}) {
    return await $nuxt.$axios.get(`/events/${config.id}`, config);
  },
  async getMembers(config = {}) {
    return await $nuxt.$axios.get(`/events/${config.id}/members`, config);
  },
  async postEvent(config = {}) {
    return await $nuxt.$axios.post(
      "/events/d9cc654d-5001-4aa9-8a8f-e1241703d864/join",
      config
    );
  },
};
