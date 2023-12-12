<template lang="html">
  <div class="event-files">
    <FileCard v-for="file in event.files" :file="file" :key="file?.id" />
  </div>
</template>
<script>
import FileCard from "./FileCard.vue";

export default {
  props: ["event"],
  components: { FileCard },
};
</script>
<style lang="css" scoped>
.event-files {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
