<template lang="html">
  <div class="wrap">
    <div class="container">
      <div class="left">
        <span @click="$router.go(-1)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 16L6 12M6 12L10 8M6 12L18 12"
              stroke="#020105"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{$store.state.translations['event.to_back']}}
        </span>
      </div>
      <div class="right">
        <button class="share">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.67699 10.994L15.323 7.67201M15.323 16.326L8.67699 13.004M8.91699 11.999C8.91699 13.2416 7.90963 14.249 6.66699 14.249C5.42435 14.249 4.41699 13.2416 4.41699 11.999C4.41699 10.7564 5.42435 9.74901 6.66699 9.74901C7.90963 9.74901 8.91699 10.7564 8.91699 11.999ZM19.583 6.66901C19.583 7.91165 18.5756 8.91901 17.333 8.91901C16.0904 8.91901 15.083 7.91165 15.083 6.66901C15.083 5.42637 16.0904 4.41901 17.333 4.41901C18.5756 4.41901 19.583 5.42637 19.583 6.66901ZM19.583 17.331C19.583 18.5736 18.5756 19.581 17.333 19.581C16.0904 19.581 15.083 18.5736 15.083 17.331C15.083 16.0884 16.0904 15.081 17.333 15.081C18.5756 15.081 19.583 16.0884 19.583 17.331Z"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="stick"></div>
        <button class="save">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 19V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.6481 18.1185 21.5889 16.8 20.6L13.2 17.9C12.4889 17.3667 11.5111 17.3667 10.8 17.9L7.2 20.6C5.88153 21.5889 4 20.6481 4 19Z"
              stroke="#28303F"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M4 8H20"
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
.wrap {
  border-bottom: 1px solid var(--grey-8, #ebebeb);
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}
.left span,
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
  cursor: pointer;
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
