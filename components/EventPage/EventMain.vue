<template>
  <div class="wrap">
    <div class="desc" v-html="event?.desc"></div>
    <!-- <div class="desc">
      <p>Мы уже соскучились, а вы?😉</p>
      <p>
        Друзья, спешим к вам с радостной новостью о нашем PizzaPitch, который
        состоится совсем скоро 🍕🍕🍕🤩 Уже 18 ноября в 10:00 пройдет #7 по
        счету PizzaPitch во всем знакомом C-Space Yunusabad 🔊
      </p>
      <p>
        Специальный гость для предстоящего PizzaPitch: Фируз Аллаев – основатель
        проекта Asaxiy расскажет о своем опыте создания успешных проектов и даст
        ценные советы стартапам!
      </p>
      <p>
        ➡️ Для подачи заявки перейдите по ссылке (участие на ивенте бесплатное и
        платное): https://forms.gle/arp1r6RMxyCrq6mW6
      </p>
      <p>Мы ждем вас, будет очень полезно и вкусно 😋</p>
    </div> -->
    <div class="map">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.6189142440057!2d69.22735537656192!3d41.27363270304267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b465f71d1c7%3A0x93fdb36e9a66a649!2z0YjQutC-0LvQsCDQvdCw0YDRg9GC0L4!5e0!3m2!1sru!2s!4v1701088951787!5m2!1sru!2s"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <p class="sup">Manzil</p>
        <p class="value">
          {{ event?.adress }}
        </p>
      </div>
    </div>
    <div class="guests">
      <div class="header">
        <h4>Ishtirokchilar</h4>
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
        <div class="item">
          <div class="person">
            <img src="@/assets/img/person.jpg" alt="" />
          </div>
          <div class="content">
            <p class="name">Muhammadullo Egamberdiyev</p>
            <p class="status">Texnicheksiy direktor</p>
            <p class="company">MimSoft</p>
          </div>
        </div>
        <div class="item">
          <div class="person">
            <img src="@/assets/img/person.jpg" alt="" />
          </div>
          <div class="content">
            <p class="name">Muhammadullo Egamberdiyev</p>
            <p class="status">Texnicheksiy direktor</p>
            <p class="company">MimSoft</p>
          </div>
        </div>
      </div>
      <div class="link">
        <button @click="$emit('tabChange', 'participants')">
          Barchasi
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="10"
            viewBox="0 0 5 10"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.443085 9.65477C0.173546 9.43914 0.129845 9.04583 0.345476 8.77629L3.36646 5.00006L0.345476 1.22383C0.129845 0.954287 0.173546 0.560979 0.443084 0.345348C0.712623 0.129717 1.10593 0.173418 1.32156 0.442957L4.6549 4.60962C4.8375 4.83789 4.8375 5.16223 4.6549 5.39049L1.32156 9.55716C1.10593 9.8267 0.712623 9.8704 0.443085 9.65477Z"
              fill="#1878F3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style scoped>
.desc :deep(p) {
  display: flex;
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
}
.desc {
  margin-bottom: 24px;
}
.map {
  margin-bottom: 40px;
}
.sup {
  margin-bottom: 4px;
  color: var(--grey-40, #9a999b);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
}
.value {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
}
.guests .header h4 {
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
.link button {
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
  border: none;
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
}
.person img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
}
.map iframe {
  width: 100% !important;
  height: 184px;
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>
