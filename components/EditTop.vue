<template>
  <div class="wrap">
    <div class="container">
      <div class="left">
        <h4 class="title">Settings</h4>
      </div>
      <div class="right">
        <button class="save" @click="$emit('back')">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2426 7.75738L7.75732 16.2427M16.2426 16.2426L7.75732 7.75732"
              stroke="#28303F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: #020105;
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.36px;
}
.wrap {
  border-bottom: 1px solid var(--grey-8, #ebebeb);
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}
a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
button {
  background: transparent;
  border: 0;
}
.right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.stick {
  width: 1px;
  height: 24px;
  background: #ebebeb;
}
</style>
