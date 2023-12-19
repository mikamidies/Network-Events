<template lang="html">
  <div>
    <Loader />
  </div>
</template>
<script>
import Loader from "../../../components/loader.vue";
import eventApi from "../../../api/eventsApi";
export default {
  async mounted() {
    try {
      const data = await eventApi.postEvent({ id: this.$route.params.code, payload: {} });
      if (localStorage.getItem("accessToken")) {
        this.$router.push(`/event/${data?.data?.id}`);
      } else {
        localStorage.setItem("qr_code", data?.data?.id);
      }
    } catch (e) {
      this.$router.push("/");
    }
  },
  components: {
    Loader,
  },
};
</script>
<style lang="css" scoped></style>
