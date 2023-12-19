<template>
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
export default {
  components: {
    BottomBar,
    loader,
  },
  data() {
    return {
      loader: true,
    };
  },
  async mounted() {
    if (!localStorage.getItem("accessToken")) {
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
      try {
        const tokens = await authApi.postRefreshToken(this.$axios, {
          refresh: localStorage.getItem("refreshToken"),
        });
        await localStorage.setItem("accessToken", tokens?.data?.access);
        await localStorage.setItem("refreshToken", tokens?.data?.refresh);
        this.getProfileInfo();
      } catch (e) {
        this.removeTokens();
        this.$router.push("/register");
      }
    },
    async getProfileInfo() {
      const code = localStorage.getItem("qr_code");

      try {
        const data = await authApi.getInfo(this.$axios);
        this.$store.commit("getProfile", data?.data);
        if (localStorage.getItem("qr_code")) this.$router.push(`/event/join${code}`);
      } catch (e) {
        if (this.$route.params?.code)
          localStorage.setItem("qr_code", this.$route.params?.code);
        if (e.response.status == 401 && localStorage.getItem("refreshToken")) {
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
