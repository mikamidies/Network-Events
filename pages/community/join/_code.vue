<template lang="html">
  <div>
    <Loader />
  </div>
</template>
<script>
import Loader from "../../../components/loader.vue";
import communityApi from "../../../api/communityApi";
export default {
  asyncData({ params }) {
    const paramsObj = params;
    return {
      paramsObj,
    };
  },
  async mounted() {
    const AUTH_STATUS = 401;
    try {
      const code = this.$route.params.code || localStorage.getItem("qr_code");
      const data = await communityApi.postEvent({ id: code, payload: {} });
      this.$router.push(`/community/${data?.data?.id}`);
    } catch (e) {
      const PARAMS_CODE = this.paramsObj?.code;
      console.log("params", this.$route.params, this.paramsObj);
      if (PARAMS_CODE) {
        localStorage.setItem("qr_code", PARAMS_CODE);
        localStorage.setItem("page", "community");
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
