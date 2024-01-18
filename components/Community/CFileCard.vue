<template lang="html">
  <div class="file-card">
    <div class="head">
      <div class="img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M4.88379 27L4.88379 9C4.88379 5.68629 7.512 3 10.7541 3L19.5595 3L31.3 15V27C31.3 30.3137 28.6718 33 25.4297 33H10.7541C7.512 33 4.88379 30.3137 4.88379 27Z"
            fill="#1878F3"
          />
          <path
            d="M19.5596 9L19.5596 3L31.3001 15L25.4298 15C22.1878 15 19.5596 12.3137 19.5596 9Z"
            fill="#1878F3"
          />
          <path
            d="M15.1567 26.6085V18.3915C15.1567 17.5882 16.056 17.1128 16.7198 17.5651L22.7494 21.6736C23.3319 22.0705 23.3319 22.9295 22.7494 23.3264L16.7198 27.4349C16.056 27.8872 15.1567 27.4118 15.1567 26.6085Z"
            fill="#1878F3"
          />
        </svg>
      </div>
      <h4 class="title">{{ file?.name }}</h4>
    </div>
    <div class="body">
      <a :href="file?.file" download target="_blank"
        >{{ $store.state.translations["event.for_download"] }}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.68945 9.85449L10.1895 12.3545M10.1895 12.3545L12.6895 9.85449M10.1895 12.3545L10.1895 2.35449"
            stroke="#1878F3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.43945 7.35449V7.35449C4.36839 7.35449 2.68945 9.03342 2.68945 11.1045L2.68945 13.3545C2.68945 15.5636 4.48031 17.3545 6.68945 17.3545L13.6895 17.3545C15.8986 17.3545 17.6895 15.5636 17.6895 13.3545L17.6895 11.1045C17.6895 9.03342 16.0105 7.35449 13.9395 7.35449V7.35449"
            stroke="#1878F3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["file"],
  methods: {
    downloadItem(url) {
      this.$axios
        .$get(url, { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "JustLink file";
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch((err) => {});
    },
  },
};
</script>
<style lang="css" scoped>
.file-card {
  border-radius: 12px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  padding: 13px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.head {
  display: grid;
  grid-template-columns: 36px 1fr;
  grid-gap: 14px;
}
.body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 100%;
}
.body .title {
  color: var(--black);
  font-family: var(--semi);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  overflow: hidden;
  text-overflow: ellipsis;
}
.body a {
  color: #1878f3;
  font-family: var(--semi);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
