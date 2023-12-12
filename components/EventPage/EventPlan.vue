<template lang="html">
  <div class="event-plan" v-html="event?.plan"></div>
</template>
<script>
export default {
  props: ["event"],
};
</script>
<style lang="css" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 16px;
}
.list li {
  color: #020105;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  list-style: disc;
}
</style>
