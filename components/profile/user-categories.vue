<script>
export default {
  name: "user-categories"
}
</script>

<template>
  <div class="category-select-block">
    <div>
      <h4 class="title">{{ $store.state.translations['main.spec_title'] }}</h4>
      <div class="list">
        <button v-for="spec in $store.state.profile?.client?.specifications">{{ spec?.title }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.category-select-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #F9F9F9;
  padding: 16px;
  border-radius: 16px;
  margin-top: 16px;
}

.title {
  font-family: var(--semi);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 24px;
}


.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 16px;
}

.list button {
  padding: 0 16px;
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 36px;
  background: #fff;
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #020105;
  gap: 8px;
  border: none;

}
</style>
