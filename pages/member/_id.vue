<template lang="html">
  <div class="master">
    <SiteTop />

    <div class="container">
      <div class="participant-profile">
        <div class="personal-card"   :style="{
            backgroundImage: `url(https://networking.pythonanywhere.com/media/images/all/2023/12/13/17024549317570534.jfif.1200x1200_q85.webp)`,
          }">
          <div class="bottom-shadow">
        
          </div>
          <h4 class="name">Muhammadullo Egamberdiyev</h4>
          <p class="position">Texnicheksiy direktor</p>
          <span class="company">National Development Community</span>
        </div>
        <div class="about">
          <h4 class="about-title">Men haqimda</h4>
          <p class="about-desc">
            Специальный гость для предстоящего PizzaPitch: Фируз Аллаев – основатель
            проекта Asaxiy расскажет о своем опыте создания успешных проектов и даст
            ценные советы стартапам!
          </p>
        </div>
        <SocialBlock />
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
import SiteTop from "../../components/SiteTop.vue";
import SocialBlock from "../../components/profile/SocialBlock.vue";
export default {
  components: {
    SiteTop,
    SocialBlock,
  },
  async asyncData({ $axios, params }) {
    // const clientData = await eventsApi.getClientById($axios, { id: params.id });
    return {};
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
