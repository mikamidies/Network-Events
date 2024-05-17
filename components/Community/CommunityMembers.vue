<template lang="html">
  <div class="wrap">
    <div class="header">
      <h4>{{ $store.state.translations["event.members"] }}</h4>
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
    <div class="items" v-if="event.public || event.is_member">
      <div
        class="item"
        v-for="member in members"
        :key="member?.id"
        @click="$router.push(`/member/${member?.id}`)"
      >
        <div class="person">
          <img loading="lazy" v-if="member?.image" :src="member?.image" alt="" />
          <img v-else src="@/assets/img/user.png" alt="" />
        </div>
        <div class="content">
          <p class="name">{{ member?.user?.full_name }}</p>
          <p class="status">{{ member?.job_title }}</p>
          <p class="company">{{ member?.company_name }}</p>
        </div>
        <svg
          class="link_icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.53151 17.5856C6.20806 17.3269 6.15562 16.8549 6.41438 16.5315L10.0396 12L6.41438 7.46849C6.15562 7.14505 6.20806 6.67308 6.53151 6.41432C6.85495 6.15556 7.32692 6.208 7.58568 6.53145L11.5857 11.5315C11.8048 11.8054 11.8048 12.1946 11.5857 12.4685L7.58568 17.4685C7.32692 17.7919 6.85495 17.8444 6.53151 17.5856Z"
            fill="#1878F3"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5315 17.5856C12.2081 17.3269 12.1556 16.8549 12.4144 16.5315L16.0396 12L12.4144 7.46849C12.1556 7.14505 12.2081 6.67308 12.5315 6.41432C12.855 6.15556 13.3269 6.208 13.5857 6.53145L17.5857 11.5315C17.8048 11.8054 17.8048 12.1946 17.5857 12.4685L13.5857 17.4685C13.3269 17.7919 12.855 17.8444 12.5315 17.5856Z"
            fill="#1878F3"
          />
        </svg>
      </div>
    </div>
    <div v-else class="members-locked">
      <h5>
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
            d="M8.75 7C8.75 5.20507 10.2051 3.75 12 3.75C13.7949 3.75 15.25 5.20507 15.25 7H16C16.2563 7 16.5071 7.02411 16.75 7.0702V7C16.75 4.37665 14.6234 2.25 12 2.25C9.37665 2.25 7.25 4.37665 7.25 7V7.0702C7.49294 7.02411 7.74365 7 8 7H8.75Z"
            fill="#28303F"
          />
          <path
            opacity="0.4"
            d="M4 11C4 8.79086 5.79086 7 8 7L16 7C18.2091 7 20 8.79086 20 11V17C20 19.2091 18.2091 21 16 21H8C5.79086 21 4 19.2091 4 17V11Z"
            fill="#28303F"
          />
          <path
            d="M14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z"
            fill="#28303F"
          />
        </svg>
        {{ $store.state.translations["event.closed"] }}
      </h5>
      <p>{{ $store.state.translations["event.show_members"] }}</p>
    </div>
    <div class="pag-block" v-if="event.public || event.is_member">
      <VPagination
        :load="true"
        class="xl:hidden"
        :totalPage="totalPage"
        :pageSize="pageSize"
        @getData="$emit('getData')"
      />
    </div>
  </div>
</template>

<script>
import VPagination from "../VPagination.vue";

export default {
  props: ["members", "event", "totalPage"],
  data() {
    return {
      pageSize: 30
    };
  },
  components: { VPagination },
};
</script>

<style scoped>
.members-locked {
  padding: 16px;
  border-radius: 12px;
  background: #fff9e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.members-locked p {
  color: #020105;
  text-align: center;
  font-family: var(--regular);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.members-locked h5 {
  color: #020105;
  text-align: center;
  font-family: var(--decor-md);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;
  display: flex;
  align-items: center;
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
  line-height: 140%;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  max-width: 98%;
}
.item {
  border-radius: 12px;
  border: 1px solid var(--grey-8, #ebebeb);
  padding: 16px;
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 16px;
  cursor: pointer;
  position: relative;
}
.link_icon {
  position: absolute;
  bottom: 8px;
  right: 8px;
}
.person img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
