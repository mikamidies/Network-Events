<template lang="html">
  <div class="wrap">
    <div class="header">
      <h4>{{ $store.state.translations["event.speakers"] }}</h4>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.75 12C2.75 16.8325 6.66751 20.75 11.5 20.75C16.3325 20.75 20.25 16.8325 20.25 12C20.25 7.16751 16.3325 3.25 11.5 3.25C6.66751 3.25 2.75 7.16751 2.75 12ZM11.5 22.25C5.83908 22.25 1.25 17.6609 1.25 12C1.25 6.33908 5.83908 1.75 11.5 1.75C17.1609 1.75 21.75 6.33908 21.75 12C21.75 14.5605 20.8111 16.9017 19.2589 18.6982L22.5303 21.9697C22.8232 22.2626 22.8232 22.7374 22.5303 23.0303C22.2374 23.3232 21.7626 23.3232 21.4697 23.0303L18.1982 19.7589C16.4017 21.3111 14.0605 22.25 11.5 22.25Z"
            fill="#020105"
          />
        </svg>
      </button>
    </div>

    <div class="items">
      <div
        class="item"
        v-for="speaker in event?.speakers"
        :key="speaker?.id"
        @click="currentSpeaker(speaker)"
      >
        <div class="person">
          <img loading="lazy" v-if="speaker?.image" :src="speaker?.image" alt="" />
          <img v-else src="@/assets/img/user.png" alt="" />
        </div>
        <div class="content">
          <p class="name">{{ speaker?.name }}</p>
          <p class="status">{{ speaker?.job_title }}</p>
          <p class="company">{{ speaker?.company }}</p>
        </div>
      </div>
    </div>
    <vue-bottom-sheet-vue2
      ref="open"
      class="bottom-drawer spicial-drawer h-full"
      :init-sheet-height="480"
    >
      <div class="bd_container">
        <div class="head">
          <div class="per_info">
            <svg
              class="bg_lines"
              xmlns="http://www.w3.org/2000/svg"
              width="362"
              height="253"
              viewBox="0 0 362 253"
              fill="none"
            >
              <path
                d="M-140.825 0L-140.825 249.377M-112.825 0L-112.825 249.377M-84.825 0L-84.825 249.377M-56.825 0L-56.825 249.377M-28.825 0L-28.825 249.377M-0.824992 0L-0.825003 249.377M27.175 0L27.175 249.377M55.1751 0L55.1751 249.377M83.1751 0L83.1751 249.377M111.175 0L111.175 249.377M139.175 0L139.175 249.377M167.175 0L167.175 249.377M195.175 0L195.175 249.377M223.175 0V249.377M251.175 0V249.377M279.175 0V249.377M307.175 0V249.377M335.175 0V249.377M363.175 0V249.377M391.175 0V249.377M419.175 0V249.377M447.175 0V249.377M475.175 0V249.377M503.175 0V249.377M517 0.174937L-155 0.174878M517 28.1555L-155 28.1555M517 56.1361L-155 56.136M517 84.1166L-155 84.1166M517 112.097L-155 112.097M517 140.078L-155 140.078M517 168.058L-155 168.058M517 196.039L-155 196.039M517 224.019L-155 224.019M517 252L-155 252"
                stroke="url(#paint0_linear_574_3210)"
                stroke-opacity="0.16"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_574_3210"
                  x1="181"
                  y1="0"
                  x2="181"
                  y2="249.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div class="info">
              <div class="image">
                <img v-if="speaker?.image" :src="speaker?.image" alt="" />
                <img v-else src="../../assets/img/user.png" alt="" />
              </div>

              <div class="info_name">
                <h4>{{ speaker?.name }}</h4>
                <p>{{ speaker?.job_title }}</p>
              </div>
              <p class="info_position">{{ speaker?.company }}</p>
            </div>
          </div>
        </div>
        <div class="btns">
          <button @click="close">
            Oynani yopish
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732"
                stroke="#28303F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </vue-bottom-sheet-vue2>
  </div>
</template>

<script>
export default {
  props: ["event"],
  data() {
    return {
      speaker: {},
    };
  },
  methods: {
    open() {
      this.$refs.open.open();
    },
    close() {
      this.$refs.open.close();
    },
    async currentSpeaker(speaker) {
      this.speaker = await speaker;
      this.open();
    },
  },
};
</script>

<style scoped>
.btns button {
  border-radius: 51px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--Apple-Grey, #f5f5f7);
  color: var(--grey-80, #353437);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  gap: 24px;
  line-height: 140%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 16px;
}
.info_position {
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--semi);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
}
.info_name {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.info_name h4 {
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--decor-bd);
  font-size: 24px;
  font-style: normal;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.48px;
  text-transform: uppercase;
}
.info_name p {
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
}
.info {
  padding-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.info .image {
  border-radius: 50%;
  border: 4px solid var(--White, #fff);
  width: 178px;
  height: 178px;
  overflow: hidden;
  z-index: 2;
  position: relative;
}
.info .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bg_lines {
  position: absolute;
  top: 0;
  width: 120%;
  z-index: 1;
}
.per_info {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
:deep(.bottom-sheet__draggable-area) {
  display: none;
}
:deep(.bottom-sheet__content) {
  border-radius: 24px 24px 0 0;
}
.bd_container {
  padding: 16px;
}
.bd_container .head {
  background-image: url(../../assets/img/bg_member.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 376px;
  width: 100%;
  border-radius: 24px;
  padding: 8px;
  overflow: hidden;
}
.wrap .header h4 {
  color: var(--Black, #020105);
  font-family: var(--decor-bd);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.36px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.header button {
  background: transparent;
  border: 0;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}
.link {
  display: flex;
  justify-content: center;
}
.link a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--Facebook-blue, #1878f3);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  border-radius: 500px;
  background: var(--Apple-Grey, #f5f5f7);
  min-width: 182px;
  padding: 12px;
}
.guests .name {
  color: var(--Black, #020105);
  font-family: var(--decor-bd);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;
  margin-bottom: 4px;
}
.status {
  color: var(--Facebook-blue, #1878f3);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  margin-bottom: 2px;
}
.company {
  color: var(--grey-40, #9a999b);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
}
.item {
  border-radius: 12px;
  border: 1px solid var(--grey-8, #ebebeb);
  padding: 16px;
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 16px;
  cursor: pointer;
}
.person img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
