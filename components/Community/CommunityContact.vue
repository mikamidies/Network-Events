<template lang="html">
  <div class="events-contant">
    <h4 class="title">{{ $store.state.translations["event.organizer_contact"] }}</h4>
    <div class="info" v-if="event?.owner_info" v-html="event?.owner_info"></div>
    <div class="list">
      <a
        class="card"
        v-if="Boolean(event?.phone_number) && `${event?.phone_number}`.length == 12"
        :href="`tel:+${event?.phone_number}`"
      >
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
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.531506 11.5856C0.20806 11.3269 0.155619 10.8549 0.414376 10.5315L4.03956 5.99997L0.414376 1.46849C0.155618 1.14505 0.208059 0.673078 0.531506 0.414321C0.854952 0.155563 1.32692 0.208005 1.58568 0.531451L5.58568 5.53145C5.80481 5.80536 5.80481 6.19458 5.58568 6.46849L1.58568 11.4685C1.32692 11.7919 0.854953 11.8444 0.531506 11.5856Z"
            fill="#1878F3"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.53151 11.5856C6.20806 11.3269 6.15562 10.8549 6.41438 10.5315L10.0396 5.99997L6.41438 1.46849C6.15562 1.14505 6.20806 0.673078 6.53151 0.414321C6.85495 0.155563 7.32692 0.208005 7.58568 0.531451L11.5857 5.53145C11.8048 5.80536 11.8048 6.19458 11.5857 6.46849L7.58568 11.4685C7.32692 11.7919 6.85495 11.8444 6.53151 11.5856Z"
            fill="#1878F3"
          />
        </svg>
      </a>
      <a
        class="card"
        :href="
          event?.telegram.includes('http://')
            ? event?.telegram
            : `http://t.me/${event?.telegram.replace('@', '')}`
        "
        target="_blank"
        v-if="event?.telegram"
      >
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
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.531506 11.5856C0.20806 11.3269 0.155619 10.8549 0.414376 10.5315L4.03956 5.99997L0.414376 1.46849C0.155618 1.14505 0.208059 0.673078 0.531506 0.414321C0.854952 0.155563 1.32692 0.208005 1.58568 0.531451L5.58568 5.53145C5.80481 5.80536 5.80481 6.19458 5.58568 6.46849L1.58568 11.4685C1.32692 11.7919 0.854953 11.8444 0.531506 11.5856Z"
            fill="#1878F3"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.53151 11.5856C6.20806 11.3269 6.15562 10.8549 6.41438 10.5315L10.0396 5.99997L6.41438 1.46849C6.15562 1.14505 6.20806 0.673078 6.53151 0.414321C6.85495 0.155563 7.32692 0.208005 7.58568 0.531451L11.5857 5.53145C11.8048 5.80536 11.8048 6.19458 11.5857 6.46849L7.58568 11.4685C7.32692 11.7919 6.85495 11.8444 6.53151 11.5856Z"
            fill="#1878F3"
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
.events-contant {
  margin-top: 8px;
}
.title {
  color: #020105;
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.36px;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card {
  border-radius: 8px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 12px 16px;
  display: flex;
  align-items: center;
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
.info {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  margin-top: 16px;
  margin-bottom: 12px;
}
</style>
