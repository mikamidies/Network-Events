<template lang="html">
  <div class="master">
    <SiteTop />

    <div class="container">
      <div class="participant-profile">
        <div class="personal-card">
          <div class="image">
            <img src="@/assets/img/person.jpg" alt="" />
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
};
</script>
<style lang="css" scoped>
.container {
  padding: 16px 16px 0 16px;
  overflow: hidden;
}
.personal-card {
  padding-top: 22px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  background: #f5f5f7;
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
  color: #020105;
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.36px;
  margin-top: 16px;
}
.personal-card .position {
  color: #1878f3;
  text-align: center;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  margin-top: 6px;
}
.personal-card .company {
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 2px;
  background: #1878f3;
  color: #fff;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  margin-top: 4px;
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
