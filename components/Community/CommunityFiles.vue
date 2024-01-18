<template lang="html">
  <div>
    <h5 class="title">{{ $store.state.translations["event.files"] }}</h5>
    <div class="event-files">
      <CFileCard v-for="file in event.files" :file="file" :key="file?.id" />
    </div>
  </div>
</template>
<script>
import CFileCard from "./CFileCard.vue";

export default {
  props: ["event"],
  components: { CFileCard },
};
</script>
<style lang="css" scoped>
.event-files {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}
.title {
  color: var(--Black, #020105);
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.36px;
  margin-top: 8px;
}
</style>
