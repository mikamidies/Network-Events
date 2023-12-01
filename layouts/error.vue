<template lang="html">
  <div>
    <h1>Error qul: {{ error }}</h1>
  </div>
</template>
<script>
export default {
  props: ["error"],
  layout: "empty",
};
</script>
