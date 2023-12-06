export const state = () => ({
  profile: {},
});

export const mutations = {
  getProfile(state, payload) {
    state.profile = payload;
  },
};
