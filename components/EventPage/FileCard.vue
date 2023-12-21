<template lang="html">
  <div class="file-card">
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
    <div class="body">
      <h4 class="title">{{ file?.name }}</h4>
      <a :href="file?.file" download target="_blank"
        >Yuklab olish 123
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.24"
            d="M18.7116 9.99996C18.7116 14.6023 14.9806 18.3333 10.3783 18.3333C5.77588 18.3333 2.04492 14.6023 2.04492 9.99996C2.04492 5.39759 5.77588 1.66663 10.3783 1.66663C14.9806 1.66663 18.7116 5.39759 18.7116 9.99996Z"
            fill="#1878F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.1534 10.4419C14.3974 10.1979 14.3974 9.80214 14.1534 9.55806L11.6534 7.05806C11.4093 6.81398 11.0136 6.81398 10.7695 7.05806C10.5254 7.30214 10.5254 7.69786 10.7695 7.94194L12.2025 9.375L7.04476 9.375C6.69958 9.375 6.41976 9.65482 6.41976 10C6.41976 10.3452 6.69958 10.625 7.04476 10.625L12.2025 10.625L10.7695 12.0581C10.5254 12.3021 10.5254 12.6979 10.7695 12.9419C11.0136 13.186 11.4093 13.186 11.6534 12.9419L14.1534 10.4419Z"
            fill="#1878F3"
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
  background: #f5f5f7;
  padding: 24px;
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
  color: #020105;
  font-family: var(--decor-md);
  font-size: 14px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.28px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
.body a {
  color: #1878f3;
  font-family: var(--decor);
  font-size: 12px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.24px;
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
