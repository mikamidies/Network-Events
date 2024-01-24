<template lang="html">
  <div class="wrap">
    <div class="current">
      <h4 class="title">{{ $store.state.translations["main.live-event-title"] }}</h4>
      <div class="items">
        <div class="item" v-for="event in myEvents" :key="event?.id">
          <NuxtLink :to="`/event/${event?.id}`">
            <img
              loading="lazy"
              v-if="event?.image"
              :src="event?.image"
              alt=""
              class="pic"
            />
            <img v-else src="@/assets/img/image.png" alt="" class="pic" />
            <div class="content">
              <div class="badge">
                {{
                  event.end_date < nowPresent
                    ? "Siz ishtirok etgansiz"
                    : "Siz ishtirok etyapsiz"
                }}
              </div>
              <p class="name">{{ event?.title }}</p>
            </div>
          </NuxtLink>
        </div>
        <div class="item" v-for="event in myCommunity" :key="event?.id">
          <NuxtLink :to="`/event/${event?.id}`">
            <img
              loading="lazy"
              v-if="event?.image"
              :src="event?.image"
              alt=""
              class="pic"
            />
            <img v-else src="@/assets/img/image.png" alt="" class="pic" />
            <div class="content">
              <div class="badge">
                {{
                  event.end_date < nowPresent
                    ? "Siz ishtirok etgansiz"
                    : "Siz ishtirok etyapsiz"
                }}
              </div>
              <p class="name">{{ event?.title }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div v-if="!loading && myEvents.length == 0">
        <a-empty />
      </div>
    </div>

    <div class="others">
      <div class="header">
        <h4 class="title">{{ $store.state.translations["main.other_events"] }}</h4>
        <NuxtLink to="/events">
          {{ $store.state.translations["main.all"] }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.3335 5.83337L11.6668 10L8.3335 14.1667"
              stroke="#28303F"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="items" v-if="!loading">
        <div class="item" v-for="event in events" :key="event?.id">
          <NuxtLink :to="`/event/${event?.id}`">
            <div class="img">
              <p class="date">
                {{ moment(event?.start_date).format(dateFormat) }}
              </p>
              <img
                loading="lazy"
                v-if="event?.image"
                :src="event?.image"
                alt=""
                class="pic"
              />
              <img v-else src="@/assets/img/image.png" alt="" class="pic" />
            </div>
            <p class="name">
              {{ event?.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="items" v-if="loading">
        <a-skeleton
          :paragraph="false"
          class="loading-card"
          v-for="elem in emptyList"
          :key="elem"
        />
      </div>
      <div v-if="!loading && events.length == 0">
        <a-empty />
      </div>
    </div>
    <div class="others">
      <div class="header">
        <h4 class="title">{{ $store.state.translations["community.community"] }}</h4>
        <NuxtLink to="/community">
          {{ $store.state.translations["main.all"] }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.3335 5.83337L11.6668 10L8.3335 14.1667"
              stroke="#28303F"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="items" v-if="!loading">
        <div class="item" v-for="event in community" :key="event?.id">
          <NuxtLink :to="`/community/${event?.id}`">
            <div class="img">
              <img
                loading="lazy"
                v-if="event?.image"
                :src="event?.image"
                alt=""
                class="pic"
              />
              <img v-else src="@/assets/img/image.png" alt="" class="pic" />
            </div>
            <p class="name">
              {{ event?.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="items" v-if="loading">
        <a-skeleton
          :paragraph="false"
          class="loading-card"
          v-for="elem in emptyList"
          :key="elem"
        />
      </div>
      <div v-if="!loading && community.length == 0">
        <a-empty />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
const DATE_FORMAT = "DD MMM YYYY, HH:mm";

export default {
  props: ["events", "myEvents", "loading", "community", "myCommunity"],
  name: "HomeEvents",
  data() {
    return {
      emptyList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      dateFormat: DATE_FORMAT,
    };
  },
  computed: {
    nowPresent() {
      const date = new Date();
      return moment(date).format("YYYY-MM-DDTHH:mm:ss");
    },
  },
  methods: {
    moment,
  },
};
</script>

<style lang="css" scoped>
.current {
  padding-top: 24px;
}
.title {
  color: var(--Black, #020105);
  font-family: var(--decor-bd);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
  margin-bottom: 12px;
}
.current .item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 197px;
  -webkit-box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);
}
.current .item::after {
  border-radius: 0px 0px 16px 16px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 100%);
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  width: 100%;
  z-index: 8;
}
.current .pic {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.current .name {
  color: var(--White, #fff);
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.36px;
  padding-left: 6px;
}
.current .content {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 9;
  height: 100%;
  justify-content: space-between;
  padding: 12px 8px;
  align-items: flex-start;
}
.current .badge {
  display: inline-flex;
  justify-content: center;
  /* max-width: 120px; */
  padding: 6px 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: var(--Red, #eb5757);
  backdrop-filter: blur(2px);
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
}

/* =========================================================================================================== */

.others {
  padding: 34px 0 0 0;
}
.others .title {
  margin: 0;
  font-family: var(--decor-bd);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.header a {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 500px;
  background: var(--White, #fff);
  box-shadow: 0px 0px 8.7px 0px rgba(0, 0, 0, 0.08) inset;
  padding: 6px 12px;
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
}
.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.img {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 12px;
}
.others .pic {
  width: 100%;
  height: 192px;
  object-fit: cover;
}
.date {
  position: absolute;
  top: 8px;
  left: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: var(--White, #fff);
  backdrop-filter: blur(2px);
  padding: 6px 8px;
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
}
.others .name {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
}
.loading-card :deep(.ant-skeleton-title) {
  height: 230px;
  border-radius: 30px;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
