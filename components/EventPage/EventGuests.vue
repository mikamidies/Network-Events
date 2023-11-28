<template>
  <div class="wrap">
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
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
}
.person img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
