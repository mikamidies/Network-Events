<template lang="html">
  <div>
    <Nuxt />
  </div>
</template>
<script>
import translationsApi from "~/api/translationsApi";

export default {
  async fetch() {
    const translationsData = await translationsApi.getTranslations(this.$axios);
    this.$store.commit("handleTranslations", translationsData?.data);
  },
  computed: {
    targetLang() {
      return this.$i18n.locale;
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
