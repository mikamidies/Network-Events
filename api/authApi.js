export default {
  async sendNumber(axios, config = {}) {
    return await axios.post("/auth/send_sms_code", config);
  },
  async sendCode(axios, config = {}) {
    return await axios.post("/auth/check_sms_code", config);
  },
  async sendInfo(axios, config = {}) {
    return await axios.post("/auth/sign_up", config);
  },
  async getInfo(config = {}) {
    return await $nuxt.$axiosInstance.get("/auth/me", config);
  },
  async putProfile(config = {}) {
    return await $nuxt.$axiosInstance.put("/auth/update", config);
  },
};
