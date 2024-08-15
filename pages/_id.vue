<template lang="html">
  <div class="master">
    <SiteTop />
    <div class="container">
      <div class="participant-profile">
        <div class="personal-card" :style="{
          backgroundImage: `url(${client?.image ? client?.image : '/empty-avatar.jpg'})`,
        }">
          <div class="bottom-shadow"></div>
          <h4 class="name">{{ client?.user?.full_name }}</h4>
          <p class="position">{{ client?.job_title }}</p>
          <p class="company">{{ client?.company_name }}</p>
        </div>
        <div class="about">
          <h4 class="about-title">
            {{ $store.state.translations["profile.personal_info"] }}
          </h4>
          <p class="about-desc">
            {{ client?.info }}
          </p>
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
import SiteTop from "@/components/SiteTop.vue";
import SocialBlock from "@/components/profile/SocialBlock.vue";
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
</style>
