export const state = () => ({
  profile: {},
  translations: {},
});

export const mutations = {
  getProfile(state, payload) {
    state.profile = payload;
  },
  handleTranslations(state, payload) {
    state.translations = payload;
  },
};
