<template lang="html">
  <div class="master">
    <div class="container">
      <div class="search__wrap">
        <div class="head">
          <img src="@/assets/img/logo.svg" alt="Justlink logo">

          <a-dropdown v-model="dropdown" :trigger="['click']">
            <button class="drop-btn">
              <span v-if="$i18n.locale === 'ru'">
                <LangRuIcon />
                <strong>Ру</strong>
              </span>

              <span v-if="$i18n.locale === 'uz'">
                <LangUzIcon />
                <strong>Uz</strong>
              </span>

              <svg :class="{ rotate180: dropdown }" width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5.8335 8.3335L10.0002 11.6668L14.1668 8.3335" stroke="#020105" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

            <a-menu slot="overlay">
              <div class="dowpdown_body">
                <button v-for="locale in locales" :class="{ active: $i18n.locale === locale.code }" :key="locale.id"
                  @click="changeLang(locale)">

                  <span v-if="locale.code === 'ru'">
                    <LangRuIcon /> <strong>Ру</strong>
                  </span>

                  <span v-if="locale.code === 'uz'">
                    <LangUzIcon /> <strong>Uz</strong>
                  </span>
                </button>
              </div>
            </a-menu>
          </a-dropdown>
        </div>

        <h4 class="title">{{ $store.state.translations["main.search-event"] }}</h4>

        <div @click="$router.push('members')" class="search">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z"
              fill="#9A999B" />
          </svg>

          <label for="search"></label>

          <input type="text" id="search" :placeholder="$store.state.translations['main.search-event']" />

          <button class="search__button">{{ $store.state.translations["main.search-btn"] }}</button>
        </div>

        <div class="users">
          <img src="@/assets/img/persons.svg" alt="users">
          <p>{{ $store.state.translations["main.members"] }}</p>
        </div>
      </div>

      <HomeEvents :events="events" :myEvents="myEvents" :loading="loading" :community="community"
        :myCommunity="myCommunity" />
      <!-- <div class="pag-block">
        <VPagination
          :load="true"
          class="xl:hidden"
          :totalPage="totalPage"
          @getData="__GET_EVENTS"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import HomeEvents from "@/components/HomePage/HomeEvents.vue";
import eventsApi from "../api/eventsApi";
import communityApi from "../api/communityApi";

import VPagination from "~/components/VPagination.vue";
import LangRuIcon from "@/components/icons/lang-ru-icon.vue";
import LangUzIcon from "@/components/icons/lang-uz-icon.vue";
export default {
  data() {
    return {
      dropdown: false,
      locales: [
        { id: 1, code: "uz", name: "Uzbek" },
        // {
        //   id: 2,
        //   code: "en",
        //   name: "English",
        // },
        {
          id: 3,
          code: "ru",
          name: "Русский",
        },
      ],
      myEvents: [],
      loading: false,
      phoneNumber: "",
      formattedPhoneNumber: "",
      community: [],
      communitytotalPage: [],
      myCommunity: [],
      events: [],
      totalPage: 0
    };
  },

  async mounted() {
    if (localStorage.getItem("accessToken")) {
      this.__GET_MY_EVENTS();
      this.__GET_MY_COMMUNITES();
    }

    this.search = this.$route.query?.search ? this.$route.query?.search : "";
    this.__GET_EVENTS();
    this.__GET_COMMUNITIES();
  },
  computed: {
    handleUser() {
      return Object.keys(this.$store.state.profile)?.length;
    },
  },
  methods: {
    changeLang(locale) {
      this.$router.push(this.switchLocalePath(locale.code))
    },
    async __GET_EVENTS() {
      const MAX_PAGE_SIZE = 3;

      try {
        const data = await eventsApi.getEvents(this.$axios, {
          params: {
            ...query,
            page_size: query?.page_size ? query?.page_size : MAX_PAGE_SIZE,
          },
        });
        this.events = data?.data?.results;
        this.totalPage = data?.data?.count;
      } catch (e) { }
    },
    async __GET_MY_EVENTS() {
      try {
        const data = await eventsApi.getMyEvents();
        this.myEvents = data?.data?.results;
      } catch (e) { }
    },
    async __GET_MY_COMMUNITES() {
      try {
        const data = await communityApi.getMyCommunity();
        this.myCommunity = data?.data?.results;
      } catch (e) { }
    },
    async __GET_COMMUNITIES() {
      const MAX_PAGE_SIZE = 3;
      try {
        const communityData = await communityApi.getCommunity({
          params: {
            ...this.$route?.query,
            page_size: this.$route.query?.page_size
              ? this.$route?.query?.page_size
              : MAX_PAGE_SIZE,
          },
        });
        this.community = communityData?.data?.results;
        this.communitytotalPage = communityData?.data?.count;
      } catch (e) { }
    },
    async __GET_EVENTS() {
      const MAX_PAGE_SIZE = 3;
      try {
        this.loading = true;
        const data = await eventsApi.getEvents(this.$axios, {
          params: {
            ...this.$route.query,
            page_size: this.$route.query?.page_size
              ? this.$route?.query?.page_size
              : MAX_PAGE_SIZE,
          },
        });
        this.events = data?.data?.results;
        this.totalPage = data?.data?.count;
      } catch (e) {
      } finally {
        this.loading = false;
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
        this.__GET_COMMUNITIES();
      }
    },
  },
  components: {
    LangUzIcon, LangRuIcon,
    HomeEvents,
    VPagination,
  },
};
</script>

<style scoped>
.dowpdown_body {
  z-index: 50;
  background: #F5F5F7;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 7px;
}

.dowpdown_body button {
  font-family: var(--regular);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #FFFFFF;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.dowpdown_body button:last-child {
  border-top: 1px solid #fff;
  padding-top: 7px;
}

.dowpdown_body span {
  color: #000;
  display: flex;
  gap: 12px;
}

.drop-btn {
  background: transparent;
  border: 1px solid #F5F5F7;
  padding: 8px;
  border-radius: 40px;
  font-family: var(--regular);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #000000;
  display: flex;
  gap: 8px;
  align-items: center;
}

.drop-btn span {
  display: flex;
  gap: 6px;
}

.pag-block {
  margin-top: 24px;
}

.search__wrap {
  padding: 12px;
  border-bottom: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  margin: 0 -16px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
  margin-bottom: 24px;
}

.head img {
  margin-left: -15px;
}

.search {
  position: relative;
  border-radius: 8px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

}

.search label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.search__button {
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: 500;
  background: var(--blue-dark);
  padding: 12px;
  color: #ffffff;
  border-radius: 40px;
}

.search input {
  margin-left: 8px;
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
  border: 0;
  background: transparent;
  width: 90%;
}

.search input:focus {
  outline: none;
}

.users {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.users p {
  font-weight: 500;
  max-width: 240px;
  line-height: 150%;
}
</style>
