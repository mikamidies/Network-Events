<template lang="html">
  <div class="master">
    <div class="d-flex flex-column justify-beween h-100">
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
          <h3>{{ $store.state.translations["login.welcome"] }}</h3>
        </div>
        <div class="register-page">
          <div class="image container">
            <img src="../../assets/img/register.png" alt="" />
          </div>
          <div class="container">
            <a-form-model class="" :model="form" ref="ruleForm" :rules="rules">
              <a-form-model-item class="form-item mb-0">
                <p class="sub">{{ $store.state.translations["login.enter-phone"] }}</p>
                <div class="input-context">
                  <span>+998</span>
                  <input
                    type="text"
                    v-mask="'## ### ## ##'"
                    v-model="form.phone_number"
                    @keyup.enter="submit"
                    placeholder="(__) ___ __ __"
                  />
                </div> </a-form-model-item
            ></a-form-model>
           
          </div>
        </div>
      </div>
      <div class="btns container">
        <button @click="submit">{{ $store.state.translations["login.continue"] }}</button>
      </div>
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
        phone_number: `998${this.form.phone_number}`.replaceAll(" ", ""),
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
        const data = await sendNUmberApi.sendNumber(this.$axios, form);
        await this.$router.push("/register/check-code");
      } catch (e) {
        if (e.response.status == 403) {
          this.$notification["error"]({
            message: "Error",
            description: "Код для этого телефона уже отправлен",
          });
        }
      }
    },
  },
};
</script>
<style lang="css" scoped>
.image {
  display: flex;
  justify-content: center;
}
.image img {
  max-height: 345px;
}
.master {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
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
.form-item .input-context {
  display: flex;
  gap: 4px;
  align-items: center;
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

.form-item input {
  border: none;
  outline: none;
  width: 100%;
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
}
</style>
