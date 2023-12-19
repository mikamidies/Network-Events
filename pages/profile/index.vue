<template lang="html">
  <div class="master">
    <ProfileTop />

    <div class="container">
      <div class="participant-profile">
        <div
          class="personal-card"
          :style="{
            backgroundImage: `url(https://networking.pythonanywhere.com/media/images/all/2023/12/13/17024549317570534.jfif.1200x1200_q85.webp)`,
          }"
        >
          <div class="bottom-shadow"></div>
          <h4 class="name">{{ $store.state.profile["full_name"] }}</h4>
          <p class="position">{{ $store.state.profile?.client?.job_title }}</p>
          <span class="company">{{ $store.state.profile?.client?.company_name }}</span>
        </div>
        <div class="about">
          <h4 class="about-title">Men haqimda</h4>
          <p class="about-desc">
            {{ $store.state.profile?.client?.info }}
          </p>
        </div>
        <SocialBlock />
        <div class="edit">
          <button class="edit-btn" @click="$router.push('/profile/edit')">
            O’zgartirish
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3828 5.80308L12.4539 7.8742M3.32157 12.8636L12.8654 3.31982L16.6817 7.13612L7.13787 16.6799H3.32056L3.32157 12.8636Z"
                stroke="#3C4BDC"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="tags">
          <h4 class="about-title">Mutahasisliklar</h4>
          <div class="list-tags">
            <ul>
              <li>Tarjimon</li>
              <li>AI developer</li>
              <li>Motivatsia</li>
              <li>Biznes</li>
              <li>Tarjimon</li>
              <li>AI developer</li>
              <li>Motivatsia</li>
              <li>Biznes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import authApi from "@/api/authApi";
import ProfileTop from "../../components/ProfileTop.vue";
import SocialBlock from "../../components/profile/SocialBlock.vue";
export default {
  components: {
    ProfileTop,
    SocialBlock,
  },
  mounted() {
    this.redirectQrCode();
    this.__GET_INFO();
  },
  methods: {
    redirectQrCode() {
      if (localStorage.getItem("qr_code")) {
        let code = localStorage.getItem("qr_code");
        this.$router.push(`/event/${code}`);
      }
    },
    async __GET_INFO() {
      try {
        const data = await authApi.getInfo(this.$axios);
        this.$store.commit("getProfile", data?.data);
      } catch (e) {
        if (e.response.status == 401) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          this.$router.push("/register");
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
  padding-bottom: 16px;
  border-bottom: 1px solid #ebebeb;
}
.tags {
  margin-top: 32px;
}
.list-tags ul {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
}
.list-tags ul li {
  padding: 8px 12px;
  border-radius: 57px;
  background: #f5f5f7;
  color: #353437;
  font-family: var(--regular);
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
  width: 182px;
  height: 40px;
  color: #3c4bdc;
  font-family: var(--medium);
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
