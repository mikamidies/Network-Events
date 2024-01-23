<template lang="html">
  <div class="master">
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
        <div class="others">
          <div class="header">
            <h4 class="title">{{ $store.state.translations["community.community"] }}</h4>
          </div>
          <div class="items" v-if="!loading">
            <div class="item" v-for="event in events" :key="event?.id">
              <NuxtLink :to="`/community/${event?.id}`">
                <div class="img">
                  <!-- <p class="date">
                    {{ moment(event?.start_date).format(dateFormat) }}
                  </p> -->
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
          @getData="__GET_COMMUNITIES"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeEvents from "@/components/HomePage/HomeEvents.vue";
import communityApi from "../../api/communityApi";
import VPagination from "~/components/VPagination.vue";
import moment from "moment";
const DATE_FORMAT = "DD MMM YYYY, HH:mm";
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
      moment,
      events: [],
      totalPage: [],
    };
  },
  // async asyncData({ $axios, query }) {
  //   const MAX_PAGE_SIZE = 10;
  //   const [eventsData] = await Promise.all([
  //     communityApi.getCommunity($axios, {
  //       params: {
  //         ...query,
  //         page_size: query?.page_size ? query?.page_size : MAX_PAGE_SIZE,
  //       },
  //     }),
  //   ]);
  //   const events = eventsData?.data?.results;
  //   const totalPage = eventsData?.data?.count;
  //   return {
  //     events,
  //     totalPage,
  //   };
  // },
  async mounted() {
    if (localStorage.getItem("accessToken")) this.__GET_COMMUNITIES();
    this.search = this.$route.query?.search ? this.$route.query?.search : "";
  },
  computed: {
    handleUser() {
      return Object.keys(this.$store.state.profile)?.length;
    },
  },
  methods: {
    async __GET_COMMUNITIES() {
      const MAX_PAGE_SIZE = 10;

      try {
        const communityData = await communityApi.getCommunity({
          params: {
            ...this.$route?.query,
            page_size: this.$route.query?.page_size
              ? this.$route?.query?.page_size
              : MAX_PAGE_SIZE,
          },
        });
        this.events = communityData?.data?.results;
        this.totalPage = communityData?.data?.count;
      } catch (e) {}
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
        this.__GET_COMMUNITIES();
      }
    },
  },
  watch: {
    async search(val) {
      if (val.length == 0 && this.$route.query?.search) {
        const { search, ...query } = this.$route.query;
        await this.$router.replace({
          path: this.$route.path,
          query: { ...query },
        });
        this.__GET_COMMUNITIES();
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
