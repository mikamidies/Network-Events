<template lang="html">
  <div>
    <main class="main">
      <nuxt />
    </main>
    <loader v-if="loader" />
    <BottomBar />
  </div>
</template>

<script>
import loader from "~/components/loader.vue";
import BottomBar from "@/components/BottomBar.vue";
import authApi from "@/api/authApi";
import translationsApi from "~/api/translationsApi";
export default {
  components: {
    BottomBar,
    loader,
  },
  data() {
    return {
      searchInputTest: true,
      loader: true,
    };
  },
  async fetch() {
    const translationsData = await translationsApi.getTranslations(this.$axios);
    this.$store.commit("handleTranslations", translationsData?.data);
  },
  async mounted() {
    // const translationsData = await translationsApi.getTranslations(this.$axios);
    const ACCESS_TOKEN = localStorage.getItem("refreshToken");
    if (!ACCESS_TOKEN) {
      this.$router.push("/register");
    } else {
      this.getProfileInfo();
    }
  },
  methods: {
    removeTokens() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },

    async refreshToken() {
      const REFRESH_TOKEN = localStorage.getItem("refreshToken");

      try {
        const tokens = await authApi.postRefreshToken(this.$axios, {
          refresh: REFRESH_TOKEN,
        });
        await localStorage.setItem("accessToken", tokens?.data?.access);
        await localStorage.setItem("refreshToken", tokens?.data?.refresh);
        // this.get{{$store.state.translations['main.profile']}}Info();
      } catch (e) {
        this.removeTokens();
        this.$router.push("/register");
      }
    },
    async getProfileInfo() {
      const QR_CODE = localStorage.getItem("qr_code");
      const REFRESH_TOKEN = localStorage.getItem("refreshToken");
      const AUTH_STATUS = 401;
      const PARAMS_CODE = this.$route.params?.code;

      try {
        const data = await authApi.getInfo(this.$axios);
        this.$store.commit("getProfile", data?.data);
        if (QR_CODE) this.$router.push(`/event/join/${QR_CODE}`);
      } catch (e) {
        if (PARAMS_CODE) localStorage.setItem("qr_code", PARAMS_CODE);
        if (e.response.status == AUTH_STATUS && REFRESH_TOKEN) {
          this.refreshToken();
        } else {
          this.removeTokens();
          this.$router.push("/register");
        }
      } finally {
        this.loader = false;
      }
    },
  },
};
</script>

<style scoped>
.main {
  padding-bottom: 108px;
}
</style>
