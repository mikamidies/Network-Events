<template lang="html">
  <div class="master">
    <SiteTop />

    <div class="container">
      <div class="top">
        <div class="img">
          <!-- <img src="@/assets/img/event-1.jpg" alt="" class="pic" /> -->
          <img
            loading="lazy"
            v-if="event?.image"
            :src="event?.image"
            alt=""
            class="pic"
          />
          <img v-else src="@/assets/img/image.png" alt="" class="pic" />
        </div>
        <div class="info">
          <p>{{ moment(event?.start_date).format(dateFormat) }}</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <ellipse
                cx="10"
                cy="13.75"
                rx="5"
                ry="2.08333"
                stroke="#9A999B"
                stroke-width="1.2"
                stroke-linejoin="round"
              />
              <ellipse
                cx="10"
                cy="6.66663"
                rx="2.5"
                ry="2.5"
                stroke="#9A999B"
                stroke-width="1.2"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.62867 10.9185C4.48468 10.9391 3.42279 11.1326 2.60835 11.4584C2.17905 11.6301 1.7813 11.8534 1.47861 12.1396C1.17434 12.4274 0.916504 12.8305 0.916504 13.3333C0.916504 13.8361 1.17434 14.2392 1.47861 14.5269C1.7813 14.8132 2.17905 15.0364 2.60835 15.2081C3.07796 15.396 3.62985 15.5399 4.23231 15.632C3.69678 15.1138 3.3756 14.5169 3.33709 13.8797C3.27777 13.8589 3.22052 13.8375 3.16544 13.8154C2.84072 13.6855 2.62827 13.5496 2.50927 13.4371C2.45634 13.387 2.43227 13.3524 2.42181 13.3333C2.43227 13.3142 2.45634 13.2795 2.50927 13.2295C2.62827 13.1169 2.84072 12.981 3.16544 12.8511C3.29698 12.7985 3.44089 12.7493 3.5958 12.7043C3.9574 12.0024 4.67383 11.3853 5.62867 10.9185ZM2.41438 13.3508C2.41425 13.3508 2.41449 13.3494 2.41549 13.3467C2.41501 13.3494 2.41451 13.3508 2.41438 13.3508ZM2.41549 13.3199C2.41449 13.3172 2.41425 13.3158 2.41438 13.3158C2.41451 13.3158 2.41501 13.3172 2.41549 13.3199Z"
                fill="#9A999B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6627 13.8797C16.6242 14.5169 16.303 15.1138 15.7675 15.632C16.3699 15.5399 16.9218 15.396 17.3914 15.2081C17.8207 15.0364 18.2185 14.8132 18.5212 14.5269C18.8254 14.2392 19.0833 13.8361 19.0833 13.3333C19.0833 12.8305 18.8254 12.4274 18.5212 12.1396C18.2185 11.8534 17.8207 11.6301 17.3914 11.4584C16.577 11.1326 15.5151 10.9391 14.3711 10.9185C15.3259 11.3853 16.0424 12.0024 16.404 12.7043C16.5589 12.7493 16.7028 12.7985 16.8343 12.8511C17.159 12.981 17.3715 13.1169 17.4905 13.2295C17.5434 13.2795 17.5675 13.3142 17.578 13.3333C17.5675 13.3524 17.5434 13.387 17.4905 13.4371C17.3715 13.5496 17.159 13.6855 16.8343 13.8154C16.7793 13.8375 16.722 13.8589 16.6627 13.8797ZM17.5854 13.3508C17.5853 13.3508 17.5848 13.3494 17.5843 13.3467C17.5853 13.3494 17.5855 13.3508 17.5854 13.3508ZM17.5843 13.3199C17.5848 13.3172 17.5853 13.3158 17.5854 13.3158C17.5855 13.3158 17.5853 13.3172 17.5843 13.3199Z"
                fill="#9A999B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.814 8.3465C13.6076 8.81451 13.3176 9.23736 12.9629 9.59612C13.3173 9.80006 13.7283 9.91671 14.1665 9.91671C15.5012 9.91671 16.5832 8.83473 16.5832 7.50004C16.5832 6.16535 15.5012 5.08337 14.1665 5.08337C14.0637 5.08337 13.9623 5.0898 13.8629 5.10227C14.0488 5.561 14.1554 6.06038 14.1657 6.58337C14.166 6.58337 14.1662 6.58337 14.1665 6.58337C14.6728 6.58337 15.0832 6.99378 15.0832 7.50004C15.0832 8.0063 14.6728 8.41671 14.1665 8.41671C14.0416 8.41671 13.9226 8.39173 13.814 8.3465Z"
                fill="#9A999B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.13683 5.10227C6.03736 5.0898 5.93602 5.08337 5.83317 5.08337C4.49848 5.08337 3.4165 6.16535 3.4165 7.50004C3.4165 8.83473 4.49848 9.91671 5.83317 9.91671C6.27141 9.91671 6.6824 9.80006 7.03679 9.59612C6.68208 9.23736 6.39205 8.81451 6.18563 8.3465C6.07713 8.39173 5.95807 8.41671 5.83317 8.41671C5.32691 8.41671 4.9165 8.0063 4.9165 7.50004C4.9165 6.99378 5.32691 6.58337 5.83317 6.58337C5.83344 6.58337 5.83372 6.58337 5.83399 6.58337C5.84425 6.06038 5.95087 5.561 6.13683 5.10227Z"
                fill="#9A999B"
              />
            </svg>
            {{ members?.length }}
          </p>
        </div>
        <h4 class="name">{{ event?.title }}</h4>
        <div class="tabs">
          <button @click="tabHandle = 'info'" :class="{ active: tabHandle == 'info' }">
            {{ $store.state.translations["event.info"] }}
          </button>
          <button
            @click="tabHandle = 'speakers'"
            :class="{ active: tabHandle == 'speakers' }"
          >
            {{ $store.state.translations["event.speakers"] }}
          </button>
          <button
            @click="tabHandle = 'participants'"
            :class="{ active: tabHandle == 'participants' }"
          >
            {{ $store.state.translations["event.members"] }}
          </button>
          <button @click="tabHandle = 'plan'" :class="{ active: tabHandle == 'plan' }">
            {{ $store.state.translations["event.place_tab"] }}
          </button>
          <button @click="tabHandle = 'files'" :class="{ active: tabHandle == 'files' }">
            {{ $store.state.translations["event.files"] }}
          </button>
          <button
            @click="tabHandle = 'contact'"
            :class="{ active: tabHandle == 'contact' }"
          >
            {{ $store.state.translations["event.for_contact"] }}
          </button>
        </div>
        <div class="body">
          <div
            v-show="tabHandle == tabItem.key"
            v-for="(tabItem, index) in tabList"
            :key="index"
            :class="tabItem.class"
            :propObj="tabItem.propItem"
          >
            <component
              :is="tabItem.name"
              :event="event"
              @tabChange="tabChange"
              :members="members"
              :coords="coords"
              :memberStatus="memberStatus"
            />
          </div>
        </div>
      </div>
    </div>
    <loader v-if="loading" />
  </div>
</template>

<script>
import SiteTop from "@/components/SiteTop.vue";
import EventMain from "@/components/EventPage/EventMain.vue";
import EventGuests from "@/components/EventPage/EventGuests.vue";
import EventPlan from "@/components/EventPage/EventPlan.vue";
import EventFiles from "@/components/EventPage/EventFiles.vue";
import EventsContact from "@/components/EventPage/EventsContact.vue";
import EventParticipants from "@/components/EventPage/EventParticipants.vue";
import eventsApi from "@/api/eventsApi";
import loader from "@/components/loader.vue";
import moment from "moment";
const DATE_FORMAT = "DD MMM YYYY, HH:mm";
export default {
  components: {
    SiteTop,
    EventMain,
    EventGuests,
    EventPlan,
    EventFiles,
    EventsContact,
    EventParticipants,
  },

  data() {
    return {
      loading: false,
      tabHandle: "info",
      members: [],
      memberStatus: false,
      dateFormat: DATE_FORMAT,
      coords: [],
      event: {},
      tabList: [
        {
          name: "EventMain",
          class: "main",
          key: "info",
          propItem: {},
        },
        {
          name: "EventGuests",
          class: "guests",
          key: "speakers",
          propItem: {},
        },
        {
          name: "EventPlan",
          class: "plan",
          key: "plan",
          propItem: {},
        },
        {
          name: "EventFiles",
          class: "files",
          key: "files",
          propItem: {},
        },
        {
          name: "EventsContact",
          class: "contact",
          key: "contact",
          propItem: {},
        },
        {
          name: "EventParticipants",
          class: "participants guests",
          key: "participants",
          propItem: {},
        },
      ],
    };
  },

  async mounted() {
    try {
      this.loading = true;
      const eventsData = await eventsApi.getEventsById({
        id: this.$route.params.id,
      });
      localStorage.removeItem("qr_code");
      this.event = eventsData?.data;
      this.coords = [Number(eventsData?.data?.lat), Number(eventsData?.data?.lon)];

      this.__GET_MEMBERS();
    } catch (e) {
      console.log(e);
      // if (e.response.status == 404) {
      //   localStorage.removeItem("qr_code");
      //   this.$router.push("/");
      // }
    } finally {
      this.loading = false;
    }
  },
  methods: {
    tabChange(name) {
      this.tabHandle = name;
    },
    moment,

    async __GET_MEMBERS() {
      const AUTH_STATUS = 401;
      try {
        const data = await eventsApi.getMembers({
          id: this.$route.params.id,
          payload: {},
        });
        this.members = data?.data?.results;
        this.memberStatus = true;
      } catch (e) {
        if (e.response.status == AUTH_STATUS) {
          this.memberStatus = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 16px 16px 0 16px;
  overflow: hidden;
}
.img {
  margin-bottom: 16px;
  border-radius: 16px;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 192px;
  object-fit: cover;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.info p {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--grey-40, #9a999b);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
}
.name {
  margin-bottom: 16px;
  color: var(--Black, #020105);
  font-family: var(--decor-bd);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 21.6px */
  letter-spacing: -0.36px;
}
.tabs {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  margin-right: -16px;
  margin-bottom: 16px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 10px;
  padding-right: 16px;
}
.tabs::-webkit-scrollbar {
  display: none;
}
.tabs button {
  padding: 8px 12px;
  border: 1px solid #f5f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 57px;
  background: var(--Apple-Grey, #f5f5f7);
  white-space: nowrap;
  color: var(--grey-80, #353437);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
}
.tabs button.active {
  color: #1878f3;
  border: 1px solid #1878f3;
}
.body {
  padding-top: 16px;
  border-top: 1px solid #ebebeb;
}
</style>
