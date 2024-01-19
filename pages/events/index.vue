<template lang="html">
  <div class="master">
    <div class="top-bar">
      <h4>Tadbirlar</h4>
      <button @click="open">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5H10M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M3 12H12M19 12H21M19 12C19 13.1046 18.1046 14 17 14C15.8954 14 15 13.1046 15 12C15 10.8954 15.8954 10 17 10C18.1046 10 19 10.8954 19 12ZM14 5H21M12 19H21M3 19H5M5 19C5 20.1046 5.89543 21 7 21C8.10457 21 9 20.1046 9 19C9 17.8954 8.10457 17 7 17C5.89543 17 5 17.8954 5 19Z"
            stroke="#020105"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
    <div class="container">
      <div class="search__wrap">
        <div class="search">
          <label for="search"></label>
          <input
            type="text"
            id="search"
            v-model="search"
            @input="onSearch"
            :placeholder="$store.state.translations['main.search-event']"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z"
              fill="#020105"
            />
          </svg>
        </div>
      </div>

      <div class="wrap">
        <!-- <div class="current">
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
                  <div class="badge">Siz ishtirokdasz</div>
                  <p class="name">{{ event?.title }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div v-if="!loading && myEvents.length == 0">
            <a-empty />
          </div>
        </div> -->

        <div class="others">
          <div class="header">
            <h4 class="title">{{ $store.state.translations["main.other_events"] }}</h4>
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
      </div>
      <div class="pag-block">
        <VPagination
          :load="true"
          class="xl:hidden"
          :totalPage="totalPage"
          @getData="__GET_EVENTS"
        />
      </div>
    </div>
    <vue-bottom-sheet-vue2
      ref="open"
      class="bottom-drawer spicial-drawer h-full"
      :init-sheet-height="600"
    >
      <div class="">
        <div class="head">
          <h4>Filter</h4>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7123 16.7729C16.0052 17.0658 16.4801 17.0658 16.7729 16.7729C17.0658 16.48 17.0658 16.0052 16.7729 15.7123L13.0607 12L16.7729 8.2877C17.0658 7.99481 17.0658 7.51993 16.7729 7.22704C16.48 6.93415 16.0052 6.93415 15.7123 7.22704L12 10.9393L8.28766 7.22699C7.99477 6.9341 7.5199 6.9341 7.227 7.22699C6.93411 7.51989 6.93411 7.99476 7.227 8.28765L10.9393 12L7.22699 15.7123C6.9341 16.0052 6.9341 16.4801 7.22699 16.773C7.51989 17.0659 7.99476 17.0659 8.28765 16.773L12 13.0606L15.7123 16.7729Z"
                fill="#020105"
              />
            </svg>
          </button>
        </div>
      </div>
    </vue-bottom-sheet-vue2>
  </div>
</template>

<script>
import HomeEvents from "@/components/HomePage/HomeEvents.vue";
import eventsApi from "@/api/eventsApi";
import communityApi from "@/api/communityApi";
import moment from "moment";
const DATE_FORMAT = "DD MMM YYYY, HH:mm";
import VPagination from "~/components/VPagination.vue";
export default {
  data() {
    return {
      myEvents: [],
      search: "",
      loading: false,
      phoneNumber: "",
      formattedPhoneNumber: "",
      emptyList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      dateFormat: DATE_FORMAT,
    };
  },
  async asyncData({ $axios, query }) {
    const MAX_PAGE_SIZE = 10;
    const [eventsData] = await Promise.all([
      eventsApi.getEvents($axios, {
        params: {
          ...query,
          page_size: query?.page_size ? query?.page_size : MAX_PAGE_SIZE,
        },
      }),
    ]);
    const events = eventsData?.data?.results;
    const totalPage = eventsData?.data?.count;
    return {
      events,
      totalPage,
    };
  },
  async mounted() {
    if (localStorage.getItem("accessToken")) this.__GET_MY_EVENTS();
    this.search = this.$route.query?.search ? this.$route.query?.search : "";
  },
  computed: {
    handleUser() {
      return Object.keys(this.$store.state.profile)?.length;
    },
  },
  methods: {
    open() {
      this.$refs.open.open();
    },
    close() {
      this.$refs.open.close();
    },
    moment,
    async __GET_MY_EVENTS() {
      try {
        const data = await eventsApi.getMyEvents();
        this.myEvents = data?.data?.results;
      } catch (e) {}
    },
    async __GET_EVENTS() {
      try {
        this.loading = true;
        const data = await eventsApi.getEvents(this.$axios, {
          params: {
            ...this.$route.query,
          },
        });
        this.events = data?.data?.results;
        this.totalPage = data?.data?.count;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
    async onSearch(e) {
      const MIN_TEXT_LENGTH = 2;
      if (
        this.$route.query?.search != e.target.value &&
        e.target.value.length > MIN_TEXT_LENGTH
      ) {
        await this.$router.replace({
          path: this.$route.path,
          query: { ...this.$route.query, page: 1, search: e.target.value },
        });
        this.__GET_EVENTS();
      }
    },
  },
  watch: {
    handleUser(val) {
      if (val > 0) {
        this.__GET_MY_EVENTS();
      }
    },
    async search(val) {
      if (val.length == 0 && this.$route.query?.search) {
        const { search, ...query } = this.$route.query;
        await this.$router.replace({
          path: this.$route.path,
          query: { ...query },
        });
        this.__GET_EVENTS();
      }
    },
  },
  components: {
    HomeEvents,
    VPagination,
  },
};
</script>

<style scoped>
.bottom-drawer {
  padding: 0 16px;
}
.bottom-drawer .head {
  display: flex;
  justify-content: space-between;
}
.bottom-drawer .head h4 {
  color: var(--Black, #020105);
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 120%; /* 21.6px */
  letter-spacing: -0.36px;
}
.bottom-drawer .head button {
  background-color: transparent;
  border: none;
  border-radius: 35px;
  background: var(--Apple-Grey, #f5f5f7);
  height: 35px;
  width: 35px;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
}
.top-bar h4 {
  color: var(--Black, #020105);
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 120%; /* 21.6px */
  letter-spacing: -0.36px;
}
.top-bar button {
  background-color: transparent;
  border: none;
}
.pag-block {
  margin-top: 24px;
}
.search__wrap {
  padding: 12px 0;
  border-bottom: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  margin: 0 -16px;
}
.search {
  position: relative;
  border-radius: 8px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--Apple-Grey, #f5f5f7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  margin: 0 16px;
}
.search label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.search input {
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  border: 0;
  background: transparent;
  width: 90%;
}
.search input:focus {
  outline: none;
}

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
}
.current .badge {
  display: inline-flex;
  justify-content: center;
  max-width: 120px;
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
