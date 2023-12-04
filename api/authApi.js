export default {
  async sendNumber(config = {}) {
    return await $nuxt.$axios.post("/auth/send_sms_code", config);
  },
  async sendCode(config = {}) {
    return await $nuxt.$axios.post("/auth/check_sms_code", config);
  },
};
