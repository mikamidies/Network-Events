<template lang="html">
  <div>
    <main class="main">
      <nuxt/>
    </main>
    <loader v-if="loader"/>
    <BottomBar/>
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
      loader: false,
    };
  },
  computed: {
    targetLang() {
      return this.$i18n.locale;
    },
  },
  async fetch() {
    const translationsData = await translationsApi.getTranslations(this.$axios);
    this.$store.commit("handleTranslations", translationsData?.data);
  },
  mounted() {
    const ACCESS_TOKEN = localStorage.getItem("accessToken");
    if (ACCESS_TOKEN) {
      this.getProfileInfo();
    }
  },
  methods: {
    removeTokens() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    setTokens(tokens) {
      localStorage.setItem("accessToken", tokens?.data?.access);
      localStorage.setItem("refreshToken", tokens?.data?.refresh);
    },
    async refreshToken() {
      const REFRESH_TOKEN = localStorage.getItem("refreshToken");
      try {
        const tokens = await authApi.postRefreshToken(this.$axios, {
          refresh: REFRESH_TOKEN,
        });
        await this.setTokens(tokens)
        location.reload()
      } catch (e) {
        this.removeTokens();
        await this.$router.push(this.localePath("/"));
      }
    },
    async getProfileInfo() {
      const QR_CODE = localStorage.getItem("qr_code");
      const CURRENT_PAGE = localStorage.getItem("page");
      const REFRESH_TOKEN = localStorage.getItem("refreshToken");
      const AUTH_STATUS = 401;
      const PARAMS_CODE = this.$route.params?.code;

      try {
        const data = await authApi.getInfo(this.$axios);
        this.$store.commit("getProfile", data?.data);
        if (QR_CODE && CURRENT_PAGE)
          await this.$router.push(this.localePath(`/${CURRENT_PAGE}/join/${QR_CODE}`));
      } catch (e) {
        if (PARAMS_CODE) localStorage.setItem("qr_code", PARAMS_CODE);
        if (e.response.status === AUTH_STATUS && REFRESH_TOKEN) {
          await this.refreshToken();
        } else {
          this.removeTokens();
          await this.$router.push(this.localePath("/"));
        }
      } finally {

      }
    },
  },
  watch: {
    async targetLang(val) {
      const translationsData = await translationsApi.getTranslations(this.$axios);
      this.$store.commit("handleTranslations", translationsData?.data);
    }
  }
};
</script>

<style scoped>
.main {
  padding-bottom: 108px;
}
</style>
