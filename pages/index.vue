<template>
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
            placeholder="Tadbirni qidirish"
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

      <HomeEvents :events="events" :myEvents="myEvents" :loading="loading" />
    </div>
  </div>
</template>

<script>
import HomeEvents from "@/components/HomePage/HomeEvents.vue";
import eventsApi from "../api/eventsApi";

export default {
  data() {
    return {
      myEvents: [],
      search: "",
      loading: false,
    };
  },
  async asyncData({ $axios, query }) {
    const [eventsData] = await Promise.all([
      eventsApi.getEvents($axios, {
        params: {
          ...query,
        },
      }),
    ]);
    const events = eventsData?.data?.results;
    return {
      events,
    };
  },
  async mounted() {
    this.__GET_MY_EVENTS();
    this.search = this.$route.query?.search ? this.$route.query?.search : "";
  },
  methods: {
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
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
    async onSearch(e) {
      if (this.$route.query?.search != e.target.value && e.target.value.length > 2) {
        await this.$router.replace({
          path: this.$route.path,
          query: { ...this.$route.query, page: 1, search: e.target.value },
        });
        this.__GET_EVENTS();
      }
    },
  },
  watch: {
    async search(val) {
      if (val.length == 0 && this.$route.query?.search) {
        await this.$router.replace({
          path: this.$route.path,
          query: {},
        });
        this.__GET_EVENTS();
      }
    },
  },
  components: {
    HomeEvents,
  },
};
</script>

<style scoped>
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
</style>
