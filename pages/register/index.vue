<template lang="html">
  <div class="master">
    <div>
      <div class="head container">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 16L6 12M6 12L10 8M6 12L18 12"
              stroke="#020105"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h3>Hush kelibsiz</h3>
      </div>
      <div class="register-page">
        <div class="image container">
          <img src="../../assets/img/register.png" alt="" />
        </div>
        <div class="container">
          <a-form-model class="" :model="form" ref="ruleForm" :rules="rules">
            <a-form-model-item class="form-item mb-0">
              <p class="sub">Telefon raqami orqali kiring</p>
              <input
                type="text"
                v-mask="'+998 ## ### ## ##'"
                v-model="form.phone_number"
                placeholder="+998 (__) ___ __ __"
              /> </a-form-model-item
          ></a-form-model>
        </div>
      </div>
    </div>
    <div class="btns container">
      <button @click="submit">Davom etish</button>
    </div>
  </div>
</template>
<script>
import sendNUmberApi from "@/api/authApi";
export default {
  layout: "empty",
  data() {
    return {
      form: {
        phone_number: "",
      },

      rules: {
        name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
    };
  },
  mounted() {
    if (localStorage.getItem("accessToken")) this.$router.push("/");
  },
  methods: {
    submit() {
      const data = {
        phone_number: this.form.phone_number.replaceAll(" ", "").replace("+", ""),
      };
      localStorage.setItem("phone_number", data.phone_number);
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.__SEND_NUMBER(data);
        }
      });
    },
    async __SEND_NUMBER(form) {
      try {
        const data = await sendNUmberApi.sendNumber(form);
        await this.$router.push("/register/check-code");
      } catch (e) {}
    },
  },
};
</script>
<style lang="css" scoped>
.image {
  display: flex;
  justify-content: center;
}
.master {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-bottom: 28px;
}
.register-page {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.head h3 {
  color: #020105;
  text-align: center;
  font-family: var(--decor-md);
  font-size: 24px;
  font-style: normal;
  line-height: 120%;
}
.head button {
  position: absolute;
  left: 16px;
  border: none;
  background-color: transparent;
}
.head {
  position: relative;
  padding: 24px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-item input {
  border-radius: 8px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  background: #fff;
  width: 100%;
  padding: 0 16px;
  color: #020105;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

.form-item input:focus {
  outline: none;
}
.form-item input {
  height: 48px;
}
.form-item .sub {
  color: #020105;
  font-family: var(--semi);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  position: relative;
  display: inline;
}
.btns button {
  border-radius: 52px;
  background: #1878f3;
  width: 100%;
  height: 56px;
  color: #fff;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  position: fixed;
  bottom: 28px;
  max-width: 468px;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>
