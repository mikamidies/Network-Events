<template lang="html">
  <div class="list">
    <a class="card" v-if="profile?.phone_number" :href="`tel:+${profile?.phone_number}`">
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3L5 3C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
            stroke="#009A10"
            stroke-width="1.5"
            stroke-linejoin="round"
          /></svg
        >+{{
          `${profile?.phone_number}`
            .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
            ?.filter((item, index) => index != 0)
            .join(" ")
        }}</span
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8L18 12M18 12L14 16M18 12L6 12"
          stroke="#28303F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
    <a class="card" v-if="profile?.client?.site" :href="profile?.client?.site">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 10.3431 17.5228 9 12 9C6.47715 9 2 10.3431 2 12M22 12C22 13.6569 17.5228 15 12 15C6.47715 15 2 13.6569 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
            stroke="#024B80"
            stroke-width="1.5"
          />
        </svg>
        {{ profile?.client?.site }}</span
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8L18 12M18 12L14 16M18 12L6 12"
          stroke="#28303F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
    <a
      class="card"
      v-if="profile?.client?.telegram"
      :href="
        profile?.client?.telegram.includes('http://')
          ? profile?.client?.telegram
          : `http://t.me/${profile?.client?.telegram.replace('@', '')}`
      "
      target="_blank"
    >
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.90842 11.0952L19.2971 4.44458C20.0208 4.13183 20.8049 4.74041 20.6815 5.51906L18.5774 18.795C18.4475 19.6151 17.4326 19.9287 16.8626 19.325L13.529 15.7699C12.8518 15.0526 12.7988 13.9488 13.404 13.1698L15.7227 9.92966C15.8621 9.75029 15.642 9.51431 15.4533 9.64086L10.606 12.8927C9.78344 13.4445 8.78538 13.6715 7.80505 13.5297L4.16199 13.0028C3.164 12.8585 2.98279 11.4952 3.90842 11.0952Z"
            stroke="#1878F3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {{ profile?.client?.telegram }}</span
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8L18 12M18 12L14 16M18 12L6 12"
          stroke="#28303F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
    <a class="card" v-if="profile?.client?.instagram" :href="profile?.client?.instagram">
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0107 6.98988L17.0128 6.99116M10.7559 21.246H13.2448C16.0451 21.246 17.4452 21.246 18.5148 20.7011C19.4556 20.2217 20.2205 19.4568 20.6999 18.516C21.2448 17.4464 21.2448 16.0463 21.2448 13.246V10.7571C21.2448 7.95682 21.2448 6.55669 20.6999 5.48713C20.2205 4.54632 19.4556 3.78141 18.5148 3.30205C17.4452 2.75708 16.0451 2.75708 13.2448 2.75708H10.7559C7.9556 2.75708 6.55547 2.75708 5.48591 3.30205C4.5451 3.78141 3.78019 4.54632 3.30083 5.48713C2.75586 6.55669 2.75586 7.95682 2.75586 10.7571V13.246C2.75586 16.0463 2.75586 17.4464 3.30083 18.516C3.78019 19.4568 4.5451 20.2217 5.48591 20.7011C6.55547 21.246 7.9556 21.246 10.7559 21.246ZM15.6654 12.0019C15.6654 14.025 14.0254 15.665 12.0023 15.665C9.97921 15.665 8.33919 14.025 8.33919 12.0019C8.33919 9.97882 9.97921 8.3388 12.0023 8.3388C14.0254 8.3388 15.6654 9.97882 15.6654 12.0019Z"
            stroke="#EB5757"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {{ profile?.client?.instagram }}</span
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8L18 12M18 12L14 16M18 12L6 12"
          stroke="#28303F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
    <a class="card" v-if="profile?.client?.linkedIn" :href="profile?.client?.linkedIn">
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.27843 16.7856V10.7747M11.5141 16.7856V15.1039M11.5141 15.1039V10.7747M11.5141 15.1039C11.5141 14.0447 12.1322 10.7747 14.2876 10.7747C15.6341 10.7747 16.7256 11.8662 16.7256 13.2127V16.7856M7.27466 7.21533L7.27674 7.21661M18.332 21.332H5.66797C4.01097 21.332 2.66797 19.989 2.66797 18.332V5.66797C2.66797 4.01097 4.01097 2.66797 5.66797 2.66797H18.332C19.989 2.66797 21.332 4.01097 21.332 5.66797V18.332C21.332 19.989 19.989 21.332 18.332 21.332Z"
            stroke="#40BFF4"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {{ profile?.client?.linkedIn }}</span
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8L18 12M18 12L14 16M18 12L6 12"
          stroke="#28303F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  props: ["profile"],
};
</script>
<style lang="css" scoped>
.list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card {
  border-radius: 8px;
  border: 1px solid #ebebeb;
  background: #fff;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
}
.card span {
  display: flex;
  gap: 16px;
  color: #020105;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
}
</style>
