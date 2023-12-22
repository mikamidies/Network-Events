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
      const PARAMS_CODE = this.$route.params?.code;
      console.log(PARAMS_CODE);
      if (PARAMS_CODE) {
        console.log("inner");
        localStorage.setItem("qr_code", PARAMS_CODE);
      }
      if (e.response.status == AUTH_STATUS) this.$router.push("/register");
    }
  },
  components: {
    Loader,
  },
};
</script>
<style lang="css" scoped></style>
