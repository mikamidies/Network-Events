<template lang="html">
  <div class="master">
    <SiteTop/>

    <div class="container">
      <div class="top">
        <div class="img">
          <span class="tag"
          >{{ $store.state.translations["community.community1"] }} -
            {{ event?.category?.title }}</span
          >
          <img
            loading="lazy"
            v-if="event?.image"
            :src="event?.image"
            alt=""
            class="pic"
          />
          <img v-else src="@/assets/img/image.png" alt="" class="pic"/>
        </div>
        <div class="info">
          <!-- <p>{{ moment(event?.start_date).format(dateFormat) }}</p> -->
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
            {{ event?.members_count }} {{ $store.state.translations["community.users"] }}
          </p>
          <p class="security" :class="event?.public ? 'public' : 'private'">
            <svg
              v-if="event?.public"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3335 6.66672V5.55672C13.3335 3.71589 11.841 2.22339 10.0002 2.22339C8.15933 2.22339 6.66683 3.71589 6.66683 5.55672V6.66672M7.9685 13.3326L9.49933 14.8634L12.5393 11.8226M14.1668 17.7767H5.8335C4.45266 17.7767 3.3335 16.6576 3.3335 15.2767V11.3901C3.3335 10.0092 4.45266 8.89006 5.8335 8.89006H14.1668C15.5477 8.89006 16.6668 10.0092 16.6668 11.3901V15.2767C16.6668 16.6576 15.5477 17.7767 14.1668 17.7767Z"
                stroke="#00CD69"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3335 6.66672V5.55672C13.3335 3.71589 11.841 2.22339 10.0002 2.22339C8.15933 2.22339 6.66683 3.71589 6.66683 5.55672V6.66672M8.25212 11.5854L11.7473 15.0799M8.25212 15.0799L11.7473 11.5854M14.1668 17.7767H5.8335C4.45266 17.7767 3.3335 16.6576 3.3335 15.2767V11.3901C3.3335 10.0092 4.45266 8.89006 5.8335 8.89006H14.1668C15.5477 8.89006 16.6668 10.0092 16.6668 11.3901V15.2767C16.6668 16.6576 15.5477 17.7767 14.1668 17.7767Z"
                stroke="#EB5757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{
              event?.public
                ? $store.state.translations["community.open"]
                : $store.state.translations["community.close"]
            }}
          </p>
        </div>
        <h4 class="name">{{ event?.title }}</h4>
        <div class="messangers">
          <a
            target="_blank"
            :class="{ disabled: !event?.telegram_chat }"
            :href="event?.telegram_chat"
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90891 8.0952L17.2976 1.44458C18.0212 1.13183 18.8054 1.74041 18.682 2.51906L16.5779 15.795C16.448 16.6151 15.4331 16.9287 14.8631 16.325L11.5295 12.7699C10.8523 12.0526 10.7992 10.9488 11.4045 10.1698L13.7232 6.92966C13.8626 6.75029 13.6425 6.51431 13.4538 6.64086L8.60651 9.89269C7.78393 10.4445 6.78586 10.6715 5.80554 10.5297L2.16248 10.0028C1.16449 9.8585 0.98328 8.49523 1.90891 8.0952Z"
                stroke="#1878F3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg
            >
            {{ $store.state.translations["community.tg_chat"] }}
          </a>
          <button
            class="presence"
            :class="{nopresence: true}"
          >
<!--            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4C11.5 6.20914 9.70914 8 7.5 8C5.29086 8 3.5 6.20914 3.5 4C3.5 1.79086 5.29086 0 7.5 0C9.70914 0 11.5 1.79086 11.5 4ZM14.5 14C14.5 16.2091 11.366 18 7.5 18C3.63401 18 0.5 16.2091 0.5 14C0.5 11.7909 3.63401 10 7.5 10C11.366 10 14.5 11.7909 14.5 14ZM15.5 9.75C15.0858 9.75 14.75 9.41421 14.75 9V7.75H13.5C13.0858 7.75 12.75 7.41421 12.75 7C12.75 6.58579 13.0858 6.25 13.5 6.25H14.75V5C14.75 4.58579 15.0858 4.25 15.5 4.25C15.9142 4.25 16.25 4.58579 16.25 5V6.25H17.5C17.9142 6.25 18.25 6.58579 18.25 7C18.25 7.41421 17.9142 7.75 17.5 7.75H16.25V9C16.25 9.41421 15.9142 9.75 15.5 9.75Z" fill="white"/>-->
<!--            </svg>-->
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C11 6.20914 9.20914 8 7 8C4.79086 8 3 6.20914 3 4C3 1.79086 4.79086 0 7 0C9.20914 0 11 1.79086 11 4ZM14 14C14 16.2091 10.866 18 7 18C3.13401 18 0 16.2091 0 14C0 11.7909 3.13401 10 7 10C10.866 10 14 11.7909 14 14ZM13 6.25C12.5858 6.25 12.25 6.58579 12.25 7C12.25 7.41421 12.5858 7.75 13 7.75H17C17.4142 7.75 17.75 7.41421 17.75 7C17.75 6.58579 17.4142 6.25 17 6.25H13Z" fill="white"/>
            </svg>

            Bступить
          </button>
          <div>
            <a target="_blank" :href="event?.instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0102 6.98988L17.0123 6.99116M10.7554 21.246H13.2443C16.0446 21.246 17.4447 21.246 18.5143 20.7011C19.4551 20.2217 20.22 19.4568 20.6994 18.516C21.2443 17.4464 21.2443 16.0463 21.2443 13.246V10.7571C21.2443 7.95682 21.2443 6.55669 20.6994 5.48713C20.22 4.54632 19.4551 3.78141 18.5143 3.30205C17.4447 2.75708 16.0446 2.75708 13.2443 2.75708H10.7554C7.95511 2.75708 6.55498 2.75708 5.48542 3.30205C4.54461 3.78141 3.77971 4.54632 3.30034 5.48713C2.75537 6.55669 2.75537 7.95682 2.75537 10.7571V13.246C2.75537 16.0463 2.75537 17.4464 3.30034 18.516C3.77971 19.4568 4.54461 20.2217 5.48542 20.7011C6.55498 21.246 7.95511 21.246 10.7554 21.246ZM15.6649 12.0019C15.6649 14.025 14.0249 15.665 12.0018 15.665C9.97872 15.665 8.3387 14.025 8.3387 12.0019C8.3387 9.97882 9.97872 8.3388 12.0018 8.3388C14.0249 8.3388 15.6649 9.97882 15.6649 12.0019Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a target="_blank" :href="event?.telegram_channel"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.90891 11.0952L19.2976 4.44458C20.0212 4.13183 20.8054 4.74041 20.682 5.51906L18.5779 18.795C18.448 19.6151 17.4331 19.9287 16.8631 19.325L13.5295 15.7699C12.8523 15.0526 12.7992 13.9488 13.4045 13.1698L15.7232 9.92966C15.8626 9.75029 15.6425 9.51431 15.4538 9.64086L10.6065 12.8927C9.78393 13.4445 8.78586 13.6715 7.80554 13.5297L4.16248 13.0028C3.16449 12.8585 2.98328 11.4952 3.90891 11.0952Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="tabs">
          <button @click="tabHandle = 'info'" :class="{ active: tabHandle == 'info' }">
            {{ $store.state.translations["event.info"] }}
          </button>
          <!-- <button
            @click="tabHandle = 'speakers'"
            :class="{ active: tabHandle == 'speakers' }"
          >
            {{ $store.state.translations["event.speakers"] }}
          </button> -->
          <button
            v-if="memberStatus"
            @click="tabHandle = 'participants'"
            :class="{ active: tabHandle == 'participants' }"
          >
            {{ $store.state.translations["event.members"] }}
          </button>
          <!-- <button @click="tabHandle = 'plan'" :class="{ active: tabHandle == 'plan' }">
            {{ $store.state.translations["event.place_tab"] }}
          </button> -->
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
              @getData="__GET_MEMBERS"
              :totalPage="totalPage"
            />
          </div>
        </div>
      </div>
    </div>
    <loader v-if="loading"/>
  </div>
</template>

<script>
import SiteTop from "@/components/SiteTop.vue";
import CommunityMain from "@/components/Community/CommunityMain.vue";
import CommunityFiles from "../../components/Community/CommunityFiles.vue";
import CommunityContact from "../../components/Community/CommunityContact.vue";
import CommunityMembers from "../../components/Community/CommunityMembers.vue";
import communityApi from "../../api/communityApi";

import loader from "@/components/loader.vue";
import moment from "moment";

const DATE_FORMAT = "DD MMM YYYY, HH:mm";
export default {
  components: {
    SiteTop,
    CommunityMain,
    CommunityFiles,
    CommunityContact,
    CommunityMembers,
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
      totalPage: 0,
      tabList: [
        {
          name: "CommunityMain",
          class: "main",
          key: "info",
          propItem: {},
        },
        {
          name: "CommunityFiles",
          class: "files",
          key: "files",
          propItem: {},
        },
        {
          name: "CommunityContact",
          class: "contact",
          key: "contact",
          propItem: {},
        },
        {
          name: "CommunityMembers",
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
      const eventsData = await communityApi.getCommunityById({
        id: this.$route.params.id,
      });
      localStorage.removeItem("qr_code");
      this.event = eventsData?.data;
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
        const data = await communityApi.getMembers({
          id: this.$route.params.id,
          payload: {
            params: {
              ...this.$route.query,
            },
          },
        });
        this.members = data?.data?.results;
        this.totalPage = data?.data?.count;
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
.disabled {
  background-color: #f5f5f7 !important;
  pointer-events: none;
}

.container {
  padding: 16px 16px 0 16px;
  overflow: hidden;
}

.img .tag {
  color: var(--black);
  font-family: var(--medium);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
  height: 28px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: #fff;
  backdrop-filter: blur(2px);
  position: absolute;
  bottom: 14px;
  left: 14px;
}

.img {
  margin-bottom: 16px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.img img {
  width: 100%;
  height: 210px;
  object-fit: cover;
}

.info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
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
  text-align: center;
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
  border-radius: 12px;
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
  background-color: #1878f3;
  color: #fff;
}

.body {
  padding-top: 16px;
  border-top: 1px solid #ebebeb;
}

.security {
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
}

.info .public {
  color: #00cd69 !important;
}

.info .private {
  color: #eb5757 !important;
}

.messangers > div > a {
  border-radius: 12px;
  background: var(--Facebook-blue, #1878f3);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.messangers {
  display: grid;
  grid-template-columns: 1fr 1fr 88px;
  gap: 8px;
  border-radius: 16px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 8px;
  margin-bottom: 16px;
}

.presence {
  height: 40px;
  padding: 8px 10px;
  gap: 4px;
  border-radius: 12px;
  font-family: var(--medium);
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  background: #00CD69;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nopresence {
  background: #EB5757;
}
.messangers > a {
  border-radius: 12px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 15px 0px rgba(24, 120, 243, 0.1);
  color: #1878f3;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.messangers > div {
  display: flex;
  gap: 8px;
}
</style>
