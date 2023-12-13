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
    if (!localStorage.getItem("accessToken")) this.$router.push("/register");
    this.getProfileInfo();
  },
  methods: {
    async refreshToken() {
      try {
        const tokens = await authApi.postRefreshToken(this.$axios, {
          refresh: localStorage.getItem("refreshToken"),
        });
        console.log(tokens);
        await localStorage.setItem("accessToken", tokens?.data?.access);
        await localStorage.setItem("refreshToken", tokens?.data?.refresh);
        this.getProfileInfo();
      } catch (e) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        this.$router.push("/register");
      }
    },
    async getProfileInfo() {
      try {
        const data = await authApi.getInfo(this.$axios);
        this.$store.commit("getProfile", data?.data);
      } catch (e) {
        if (e.response.status == 401) {
          this.refreshToken();
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
