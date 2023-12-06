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
    try {
      const data = await authApi.getInfo();
      this.$store.commit("getProfile", data?.data);
    } catch (e) {
      if (e.response.status == 401) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        this.$router.push("/register");
      }
    } finally {
      this.loader = false;
    }
  },
};
</script>

<style scoped>
.main {
  padding-bottom: 108px;
}
</style>
