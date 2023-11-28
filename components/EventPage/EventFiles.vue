<template lang="html">
  <div class="event-files">
    <FileCard />
    <FileCard />
    <FileCard />
    <FileCard />
  </div>
</template>
<script>
import FileCard from "./FileCard.vue";

export default {
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
