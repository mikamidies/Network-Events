<template lang="html">
  <div class="wrap">
    <div class="container">
      <div class="left">
        <h4 class="title">{{ $store.state.translations["profile.cabinet"] }}</h4>
      </div>
      <div class="right">
        <button class="share">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8485 4H11.1515C10.2143 4 9.45453 4.71634 9.45453 5.6C9.45453 6.61121 8.37258 7.25411 7.48444 6.77064L7.39423 6.72153C6.58258 6.27971 5.54472 6.54191 5.07612 7.30717L4.22763 8.69281C3.75902 9.45808 4.03711 10.4366 4.84877 10.8785C5.73734 11.3622 5.73733 12.6378 4.84876 13.1215C4.03711 13.5634 3.75902 14.5419 4.22763 15.3072L5.07612 16.6928C5.54472 17.4581 6.58258 17.7203 7.39423 17.2785L7.48444 17.2294C8.37258 16.7459 9.45453 17.3888 9.45453 18.4C9.45453 19.2837 10.2143 20 11.1515 20H12.8485C13.7857 20 14.5455 19.2837 14.5455 18.4C14.5455 17.3888 15.6274 16.7459 16.5156 17.2294L16.6058 17.2785C17.4174 17.7203 18.4553 17.4581 18.9239 16.6928L19.7724 15.3072C20.241 14.5419 19.9629 13.5634 19.1512 13.1215C18.2627 12.6378 18.2627 11.3622 19.1512 10.8785C19.9629 10.4366 20.241 9.45809 19.7724 8.69283L18.9239 7.30719C18.4553 6.54192 17.4174 6.27972 16.6058 6.72154L16.5156 6.77065C15.6274 7.25412 14.5455 6.61122 14.5455 5.6C14.5455 4.71634 13.7857 4 12.8485 4Z"
              stroke="#5C46E5"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <circle cx="12" cy="12" r="3" stroke="#5C46E5" stroke-width="1.5" />
          </svg>
        </button>
        <div class="stick"></div>
        <button class="save" @click="check">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 14L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L18 10"
              stroke="#EB5757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 12L13 12M4 17.2663V7.26633M16 17.2663C16 18.3709 15.1046 19.2663 14 19.2663H10M16 7.26633C16 6.16176 15.1046 5.26633 14 5.26633H10M4.8906 19.8601L6.8906 21.1934C8.21971 22.0795 10 21.1267 10 19.5293V5.00336C10 3.40597 8.21971 2.45319 6.8906 3.33926L4.8906 4.6726C4.3342 5.04353 4 5.66799 4 6.3367V18.196C4 18.8647 4.3342 19.4891 4.8906 19.8601Z"
              stroke="#EB5757"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showConfirm(event) {
      this.$confirm({
        title: "Profilingizdan chiqishni xoxlaysizmi?",
        okText: "Ha",
        cancelText: "Yo'q",
        onOk() {
          event.logout();
        },
        onCancel() {},
        class: "test",
      });
    },
    check() {
      this.showConfirm(this);
    },
    logout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      this.$store.commit("getProfile", {});
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.title {
  color: #020105;
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.36px;
}
.wrap {
  border-bottom: 1px solid var(--grey-8, #ebebeb);
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}
a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
button {
  background: transparent;
  border: 0;
}
.right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.stick {
  width: 1px;
  height: 24px;
  background: #ebebeb;
}
</style>
