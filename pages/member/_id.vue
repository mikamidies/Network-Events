<template lang="html">
  <div class="master">
    <SiteTop />
    <div class="container">
      <div class="participant-profile">
        <div class="personal-card">
          <img class="bg" src="@/assets/img/profile-bg.svg" alt="bg">

          <img class="avatar" :src="client?.image ? client?.image : '/empty-avatar.jpg'" alt="avatar">
          <h4 class="name">{{ client?.user?.full_name }}</h4>
          <p class="position">{{ client?.job_title }}</p>
          <span class="company">{{ client?.company_name }}</span>
        </div>
        <div class="about">
          <h4 class="about-title">
            {{ $store.state.translations["profile.personal_info"] }}
          </h4>
          <p class="about-desc">
            {{ client?.info }}
          </p>
        </div>
        <SocialBlock :profile="{
          ...client,
          ...client?.user,
          client: { ...client, client: { ...client, ...client?.user } },
        }" />
        <UserCategories :categories="client?.specifications" />

      </div>
    </div>
  </div>
</template>
<script>
import SiteTop from "../../components/SiteTop.vue";
import SocialBlock from "../../components/profile/SocialBlock.vue";
import eventsApi from "@/api/eventsApi";
import UserCategories from "@/components/profile/user-categories.vue";
export default {
  components: {
    UserCategories,
    SiteTop,
    SocialBlock,
  },
  data() {
    return {
      client: {},
    };
  },
  async mounted() {
    const clientData = await eventsApi.getClientById({
      id: this.$route.params.id,
    });
    console.log(clientData)
    this.client = clientData?.data;
  },
};
</script>
<style lang="css" scoped>
.container {
  padding: 16px 16px 0 16px;
  overflow: hidden;
}

.personal-card {
  text-align: center;
  padding: 22px 16px 24px 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  background: #f5f5f7;
  /* background-image: url('@/assets/img/profile-bg.svg');
  background-repeat: no-repeat;
  background-size: 100%; */
  height: 391px;
  position: relative;
  overflow: hidden;
}

.personal-card .bg {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.personal-card .name {
  color: #fff;
  font-family: var(--decor-md);
  font-size: 25px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.36px;
  margin-top: 16px;
  position: relative;
  z-index: 10;
}

.personal-card .avatar {
  z-index: 10;
  width: 164px;
  height: 164px;
  border-radius: 50%;
  border: 2px solid #fff;
  object-fit: cover;
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
  color: #fff;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  margin-top: 35px;
  position: relative;
  z-index: 10;
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
</style>
