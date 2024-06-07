<template lang="html">
  <div class="master">
    <ProfileTop/>
    <div class="container">
      <div class="participant-profile">
        <div
          class="personal-card"
          :style="{
            backgroundImage: `url(${$store.state.profile?.client?.image ? $store.state.profile?.client?.image:'/empty-avatar.jpg'})`,
          }"
        >
          <div class="bottom-shadow"></div>
          <h4 class="name">{{ $store.state.profile["full_name"] }}</h4>
          <p class="position">{{ $store.state.profile?.client?.job_title }}</p>
          <span class="company">{{ $store.state.profile?.client?.company_name }}</span>
        </div>
        <div class="about">
          <h4 class="about-title">
            {{ $store.state.translations["profile.personal_info"] }}
          </h4>
          <p class="about-desc">
            {{ $store.state.profile?.client?.info }}
          </p>
        </div>
        <SocialBlock :profile="$store.state.profile"/>
        <UserCategories :categories="$store.state.profile?.client?.specifications"/>
        <div class="edit">
          <button class="edit-btn" @click="$router.push(localePath('/profile/edit'))">
            {{ $store.state.translations['profile.edit'] }}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.2915 4.00033C1.2915 2.50455 2.50407 1.29199 3.99984 1.29199L8.99984 1.29199C9.34502 1.29199 9.62484 1.01217 9.62484 0.666992C9.62484 0.321814 9.34502 0.0419922 8.99984 0.0419922L3.99984 0.0419922C1.81371 0.0419922 0.0415039 1.8142 0.0415039 4.00033L0.0415039 14.0003C0.0415039 16.1865 1.81371 17.9587 3.99984 17.9587L13.9998 17.9587C16.186 17.9587 17.9582 16.1865 17.9582 14.0003V9.00033C17.9582 8.65515 17.6783 8.37533 17.3332 8.37533C16.988 8.37533 16.7082 8.65515 16.7082 9.00033V14.0003C16.7082 15.4961 15.4956 16.7087 13.9998 16.7087L3.99984 16.7087C2.50407 16.7087 1.2915 15.4961 1.2915 14.0003L1.2915 4.00033ZM12.6824 1.23123C13.4347 0.478913 14.6544 0.478913 15.4067 1.23123L16.7689 2.59342C17.5212 3.34573 17.5212 4.56548 16.7689 5.31779L15.5612 6.52556C15.4664 6.47861 15.3666 6.42784 15.2632 6.37339C14.567 6.00687 13.7409 5.49246 13.1243 4.8759C12.5077 4.25934 11.9933 3.4332 11.6268 2.73702C11.5723 2.63357 11.5216 2.5338 11.4746 2.43898L12.6824 1.23123ZM12.2404 5.75979C12.97 6.48939 13.8979 7.06361 14.6327 7.454L9.8832 12.2035C9.58847 12.4983 9.20608 12.6895 8.79345 12.7484L5.93286 13.1571C5.29717 13.2479 4.7523 12.703 4.84311 12.0673L5.25177 9.20671C5.31071 8.79408 5.5019 8.4117 5.79664 8.11696L10.5462 3.36743C10.9366 4.10228 11.5108 5.03018 12.2404 5.75979Z"
                    fill="#5C46E6"/>
            </svg>

          </button>
        </div>
      </div>
    </div>
    <loader v-if="loader"/>
  </div>
</template>
<script>
import authApi from "@/api/authApi";
import ProfileTop from "../../components/ProfileTop.vue";
import SocialBlock from "../../components/profile/SocialBlock.vue";
import UserCategories from "@/components/profile/user-categories.vue";

export default {
  data() {
    return {
      loader: true
    }
  },
  components: {
    UserCategories,
    ProfileTop,
    SocialBlock,
  },
  mounted() {
    this.redirectQrCode();
    localStorage.getItem('accessToken') ?
      this.__GET_INFO():
      this.$router.push(this.localePath('/register'))
  },
  methods: {
    redirectQrCode() {
      if (localStorage.getItem("qr_code")) {
        let code = localStorage.getItem("qr_code");
        this.$router.push(this.localePath(`/event/${code}`));
      }
    },
    async __GET_INFO() {
      const AUTH_STATUS = 401;
      try {
        const data = await authApi.getInfo(this.$axios);
        this.$store.commit("getProfile", data?.data);
        this.loader = false
      } catch (e) {
        if (e.response.status === AUTH_STATUS) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          this.$router.push(this.localePath("/register"));
        }
      }
    },
  },
};
</script>
<style lang="css" scoped>
.container {
  padding: 16px 16px 0 16px;
  overflow: hidden;
}

.personal-card {
  padding: 22px 16px 24px 16px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px;
  background: #f5f5f7;
  height: 391px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.bottom-shadow {
  height: 141px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(60, 75, 220, 0) 0%, #3c4bdc 59.13%);
}

.image {
  width: 122px;
  height: 122px;
  border-radius: 50%;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.personal-card .name {
  color: #fff;
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.36px;
  margin-top: 16px;
  position: relative;
  z-index: 10;
}

.personal-card .position {
  color: #fff;
  text-align: center;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  margin-top: 6px;
  position: relative;
  z-index: 10;
}

.personal-card .company {
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 2px;
  background: #fff;
  color: #020105;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  margin-top: 4px;
  position: relative;
  z-index: 10;
  border-radius: 6px;
}

.about {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #F9F9F9;
  padding: 16px;
  border-radius: 24px;
}

.about-title {
  color: #020105;
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.36px;
}

.about-desc {
  color: #020105;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  line-height: 140%;
//padding-bottom: 16px; //border-bottom: 1px solid #ebebeb;
}

.tags {
  margin-top: 32px;
  background: #F9F9F9;
  padding: 12px 16px;
  border-radius: 16px;
}

.list-tags ul {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
  padding-left: 0
}

.list-tags ul li {
  padding: 8px 12px;
  border-radius: 57px;
  background: #fff;
  color: #353437;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  line-height: 140%;
  white-space: nowrap;
}

.edit {
  margin-top: 12px;
  display: flex;
  justify-content: center;
}

.edit-btn {
  border-radius: 500px;
  background: #f8f9ff;
  width: 100%;
  height: 56px;
  color: #3c4bdc;
  font-family: var(--semi);
  font-size: 14px;
  font-style: normal;
  line-height: 140%;
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;
  justify-content: center;
}
</style>
