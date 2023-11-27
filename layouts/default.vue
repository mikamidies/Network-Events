<template>
  <div>
    <main class="main">
      <nuxt />
    </main>
    <BottomBar />
  </div>
</template>

<script>
import BottomBar from "@/components/BottomBar.vue";
export default {
  components: {
    BottomBar,
  },
};
</script>

<style scoped>
.main {
  padding-bottom: 84px;
}
</style>
