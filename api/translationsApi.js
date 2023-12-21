export default {
  async getTranslations(axios, config = {}) {
    return await axios.get("/translations", config);
  },
};
