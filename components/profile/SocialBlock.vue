<template lang="html">
  <div class="list">
    <a class="card" v-if="profile?.phone_number" :href="`tel:+${profile?.phone_number}`">
      <span>
         <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#00CD69"/>
              <path
                d="M29 24.42V27.9561C29 28.4811 28.5941 28.9167 28.0705 28.9537C27.6331 28.9846 27.2763 29 27 29C18.1634 29 11 21.8366 11 13C11 12.7237 11.0155 12.3669 11.0464 11.9295C11.0834 11.4059 11.5189 11 12.0439 11H15.5801C15.8368 11 16.0518 11.1944 16.0775 11.4498C16.1007 11.6791 16.1222 11.8631 16.1421 12.002C16.3443 13.4147 16.7575 14.7594 17.3487 16.003C17.4436 16.2026 17.3817 16.4416 17.2018 16.5701L15.0436 18.1118C16.3575 21.1811 18.8189 23.6425 21.8882 24.9565L23.4271 22.8019C23.5572 22.6199 23.799 22.5573 24.001 22.6532C25.2446 23.2439 26.5891 23.6566 28.0016 23.8584C28.1396 23.8782 28.3225 23.8995 28.5502 23.9225C28.8056 23.9483 29 24.1633 29 24.42Z"
                fill="white"/>
          </svg>
              +{{
          `${profile?.phone_number}`
            .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
            ?.filter((item, index) => index != 0)
            .join(" ")
        }}</span>
      <svg
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
      target="_blank"
      v-if="profile?.client?.site && profile?.client?.show_site"
      :href="
        profile?.client?.site?.includes('http://')
          ? profile?.client?.site
          : 'http://' + profile?.client?.site
      "
    >
      <span>
       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#F2994A"/>
<path
  d="M10.0493 21H15.5272C15.7062 24.2689 16.7574 27.3054 18.452 29.881C13.9876 29.1872 10.5001 25.5403 10.0493 21ZM10.0493 19C10.5001 14.4598 13.9876 10.8129 18.452 10.1191C16.7574 12.6947 15.7062 15.7312 15.5272 19H10.0493ZM29.9506 19H24.4726C24.2936 15.7312 23.2425 12.6947 21.5479 10.1191C26.0123 10.8129 29.4998 14.4598 29.9506 19ZM29.9506 21C29.4998 25.5403 26.0123 29.1872 21.5479 29.881C23.2425 27.3054 24.2936 24.2689 24.4726 21H29.9506ZM17.5307 21H22.4692C22.2976 23.7829 21.4146 26.3733 19.9999 28.5916C18.5852 26.3733 17.7023 23.7829 17.5307 21ZM17.5307 19C17.7023 16.2172 18.5852 13.6268 19.9999 11.4085C21.4146 13.6268 22.2976 16.2172 22.4692 19H17.5307Z"
  fill="white"/>
</svg>

        {{ profile?.client?.site }}</span
      >
      <svg
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
      v-if="profile?.client?.telegram && profile?.client?.show_telegram"
      :href="
        profile?.client?.telegram.includes('http://')
          ? profile?.client?.telegram
          : `http://t.me/${profile?.client?.telegram.replace('@', '')}`
      "
      target="_blank"
    >
      <span>
       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#1878F3"/>
<path
  d="M20.001 30C14.4781 30 10.001 25.5228 10.001 20C10.001 14.4771 14.4781 10 20.001 10C25.5238 10 30.001 14.4771 30.001 20C30.001 25.5228 25.5238 30 20.001 30ZM16.8911 21.1708L16.9038 21.1628C17.4835 23.0767 17.7734 24.0337 17.7734 24.0337C17.8856 24.3442 18.04 24.3996 18.2273 24.3743C18.4145 24.3489 18.5139 24.2476 18.6361 24.1297C18.6361 24.1297 19.0324 23.7472 19.825 22.9823L22.3759 24.8698C22.8407 25.1266 23.1763 24.9941 23.2917 24.4377L24.9495 16.6164C25.1325 15.8884 24.8115 15.5964 24.247 15.8275L14.514 19.5871C13.85 19.854 13.8532 20.2255 14.3931 20.3911L16.8911 21.1708Z"
  fill="white"/>
</svg>


        {{
          profile?.client?.telegram?.includes("@")
            ? profile?.client?.telegram
            : "@" + profile?.client?.telegram
        }}</span
      >
      <svg
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
      v-if="profile?.client?.instagram && profile?.client?.show_instagram"
      :href="
            profile?.client?.instagram?.includes('https://')
              ? profile?.client?.instagram
              : `https://www.instagram.com/${profile?.client?.instagram}/`
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
                d="M17.0107 6.98988L17.0128 6.99116M10.7559 21.246H13.2448C16.0451 21.246 17.4452 21.246 18.5148 20.7011C19.4556 20.2217 20.2205 19.4568 20.6999 18.516C21.2448 17.4464 21.2448 16.0463 21.2448 13.246V10.7571C21.2448 7.95682 21.2448 6.55669 20.6999 5.48713C20.2205 4.54632 19.4556 3.78141 18.5148 3.30205C17.4452 2.75708 16.0451 2.75708 13.2448 2.75708H10.7559C7.9556 2.75708 6.55547 2.75708 5.48591 3.30205C4.5451 3.78141 3.78019 4.54632 3.30083 5.48713C2.75586 6.55669 2.75586 7.95682 2.75586 10.7571V13.246C2.75586 16.0463 2.75586 17.4464 3.30083 18.516C3.78019 19.4568 4.5451 20.2217 5.48591 20.7011C6.55547 21.246 7.9556 21.246 10.7559 21.246ZM15.6654 12.0019C15.6654 14.025 14.0254 15.665 12.0023 15.665C9.97921 15.665 8.33919 14.025 8.33919 12.0019C8.33919 9.97882 9.97921 8.3388 12.0023 8.3388C14.0254 8.3388 15.6654 9.97882 15.6654 12.0019Z"
                stroke="#EB5757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {{
              profile?.client?.instagram?.includes("@")
                ? profile?.client?.instagram
                : "@" + profile?.client?.instagram
            }}</span
          >
      <svg
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
      v-if="profile?.client?.linkedIn && profile?.client?.show_linkedIn"
      :href="
        profile?.client?.linkedIn?.includes('https://')
          ? profile?.client?.linkedIn
          : `https://www.linkedin.com/${profile?.client?.linkedIn}/`
      "
      target="_blank"
    >
      <span>
       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#5C46E6"/>
<path
  d="M26.3362 26.339H23.6707V22.1622C23.6707 21.1662 23.6505 19.8845 22.2817 19.8845C20.892 19.8845 20.6797 20.9683 20.6797 22.0887V26.339H18.0142V17.75H20.5747V18.9207H20.6092C20.967 18.2457 21.837 17.5332 23.1367 17.5332C25.8375 17.5332 26.337 19.3108 26.337 21.6245L26.3362 26.339ZM15.0037 16.5747C14.1457 16.5747 13.4565 15.8802 13.4565 15.026C13.4565 14.1725 14.1465 13.4788 15.0037 13.4788C15.8587 13.4788 16.5517 14.1725 16.5517 15.026C16.5517 15.8802 15.858 16.5747 15.0037 16.5747ZM16.3402 26.339H13.6672V17.75H16.3402V26.339ZM27.6697 11H12.3292C11.595 11 11.001 11.5805 11.001 12.2968V27.7033C11.001 28.4202 11.595 29 12.3292 29H27.6675C28.401 29 29.001 28.4202 29.001 27.7033V12.2968C29.001 11.5805 28.401 11 27.6675 11H27.6697Z"
  fill="white"/>
</svg>


        <p>
          {{
            profile?.client?.linkedIn?.includes("@")
              ? profile?.client?.linkedIn
              : "@" + profile?.client?.linkedIn
          }}
        </p></span
      >
      <svg
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
  border-radius: 16px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #F9F9F9;
  padding: 16px;
}

.card {
  border-radius: 8px;
//border: 1px solid #ebebeb; background: #fff; //padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; background: transparent;
}

.card span {
  display: flex;
  gap: 16px;
  color: #020105;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  max-width: 90%;
  align-items: center;
}

.card span p {
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
