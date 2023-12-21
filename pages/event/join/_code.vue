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
    const AUTH_STATUS = 401;
    try {
      const code = this.$route.params.code || localStorage.getItem("qr_code");
      const data = await eventApi.postEvent({ id: code, payload: {} });
      this.$router.push(`/event/${data?.data?.id}`);
    } catch (e) {
      if (e.response.status == AUTH_STATUS) this.$router.push("/");
    }
  },
  components: {
    Loader,
  },
};
</script>
<style lang="css" scoped></style>
