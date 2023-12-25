<template lang="html">
  <div class="events-contant">
    <h4 class="title">Tashkilotchi bilan aloqa</h4>
    <div class="list">
      <a class="card" v-if="Boolean(event?.phone_number) && `${event?.phone_number}`.length == 12" :href="`tel:+${event?.phone_number}`">
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3L5 3C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
              stroke="#009A10"
              stroke-width="1.5"
              stroke-linejoin="round"
            /></svg
          >+{{
            `${event?.phone_number}`
              .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
              .filter((item, index) => index != 0)
              .join(" ")
          }}</span
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8L18 12M18 12L14 16M18 12L6 12"
            stroke="#28303F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <a class="card" :href="event?.telegram" v-if="event?.telegram">
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.90891 11.0952L19.2976 4.44458C20.0212 4.13183 20.8054 4.74041 20.682 5.51906L18.5779 18.795C18.448 19.6151 17.4331 19.9287 16.8631 19.325L13.5295 15.7699C12.8523 15.0526 12.7992 13.9488 13.4045 13.1698L15.7232 9.92966C15.8626 9.75029 15.6425 9.51431 15.4538 9.64086L10.6065 12.8927C9.78393 13.4445 8.78586 13.6715 7.80554 13.5297L4.16248 13.0028C3.16449 12.8585 2.98328 11.4952 3.90891 11.0952Z"
              stroke="#1878F3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{ event?.telegram }}</span
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8L18 12M18 12L14 16M18 12L6 12"
            stroke="#28303F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["event"],
};
</script>
<style lang="css" scoped>
.title {
  color: #020105;
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.36px;
}
.list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card {
  border-radius: 8px;
  border: 1px solid #ebebeb;
  background: #fff;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
}
.card span {
  display: flex;
  gap: 16px;
  color: #020105;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
}
</style>
