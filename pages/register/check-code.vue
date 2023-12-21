<template lang="html">
  <div class="master">
    <div>
      <div class="head container">
        <button @click="$router.go(-1)">
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
          <p class="text">
            +{{
              form.phone_number &&
              `${form.phone_number}`
                .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
                .filter((item, index) => index != 0)
                .join(" ")
            }}
            telefon raqamingizga tasdiqlash kodi yuborildi
          </p>
          <a-form-model class="" :model="form" ref="ruleForm" :rules="rules">
            <a-form-model-item class="form-item mb-0">
              <p class="sub">Tasdiqlash kodini kiriting</p>
              <div class="code-input position-relative">
                <v-otp-input
                  ref="otpInput"
                  input-classes="otp-input"
                  class="code-inner"
                  :num-inputs="6"
                  separator=""
                  :should-auto-focus="true"
                  :autofocus="true"
                  placeholder="*"
                  :is-input-num="true"
                  @on-change="handleOnChange"
                  @on-complete="handleOnComplete"
                />
                <div class="time-line">
                  <span
                    ><a-progress
                      class="sms-progress"
                      type="circle"
                      :percent="timeProgress"
                  /></span>
                  <p class="text-base xl:text-[14px] text-black font-medium">
                    00:{{ time >= 10 ? time : `0${time}` }}
                  </p>
                </div>
              </div>
            </a-form-model-item></a-form-model
          >
          <div>
            <button class="resend" :class="{ disabled: time != 0 }">
              Qayta jonatish
            </button>
          </div>
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
        sms_code: "",
      },
      time: 60,
      timeProgress: 100,
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
    let inputs = document.querySelectorAll(".otp-input");
    inputs.forEach((item, index) => {
      if (index != 0 && !inputs[index - 1].value) {
        item.classList.add("disabledItem");
      } else {
        item.classList.remove("disabledItem");
      }
    });
    this.setInputPlaceholder();
    if (localStorage.getItem("phone_number"))
      this.form.phone_number = localStorage.getItem("phone_number");
    setInterval(() => {
      if (this.time > 0) {
        this.time--;
      }
      if (this.timeProgress > 0) {
        this.timeProgress -= 100 / 60;
      }
    }, 1000);
  },
  methods: {
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.__SEND_CODE(this.form);
        }
      });
    },
    async __SEND_CODE(form) {
      try {
        const data = await sendNUmberApi.sendCode(this.$axios, form);

        if (data?.data?.code_valid) {
          this.$router.push("/register/info");
          localStorage.setItem("accessCode", this.form.sms_code);
        } else {
          this.$router.push("/");
          localStorage.setItem("accessToken", data?.data?.access);
          localStorage.setItem("refreshToken", data?.data?.refresh);
          localStorage.removeItem("phone_number");
          localStorage.removeItem("accessCode");
        }
      } catch (e) {
        console.log(e);
        this.$notification["error"]({
          message: "Error",
          description: e.response?.statusText,
        });
      }
    },
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
    },
    handleOnChange(val) {
      let inputs = document.querySelectorAll(".otp-input");
      inputs.forEach((item, index) => {
        if (index != 0 && !inputs[index - 1].value) {
          item.classList.add("disabledItem");
        } else {
          item.classList.remove("disabledItem");
        }
        if (val.length + 1 < inputs.length) {
          inputs[val.length + 1].classList.add("disabledItem");
        }
      });
      this.form.sms_code = val;
    },
    setInputPlaceholder() {
      this.$refs.otpInput.$el
        .querySelectorAll("input")
        .forEach((input) => (input.placeholder = "*"));
    },
  },
};
</script>
<style lang="css" scoped>
:deep(.disabledItem) {
  pointer-events: none;
}
:deep(.code-inner) {
  display: flex !important;
}
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
.time-line {
  position: absolute;
  border-radius: 4px;
  background: #f8f9ff;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0 10px;
  height: 36px;
  right: 8px;
}
.time-line p {
  color: #020105;
  text-align: center;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  line-height: 140%;
}
.sms-progress {
  display: flex !important;
}
.sms-progress :deep(.ant-progress-inner) {
  width: 20px !important;
  height: 20px !important;
}
.sms-progress :deep(.ant-progress-text) {
  display: none !important;
}
.sms-progress :deep(.ant-progress-circle-path) {
  stroke-width: 20px;
  stroke: #1878f3 !important;
}
.form-item {
  margin-bottom: 12px;
}
.resend {
  background-color: transparent;
  border: none;
  outline: none;
  color: #1878f3;
  font-family: var(--regular);
  font-size: 14px;
  font-style: normal;
  line-height: 140%;
}
.text {
  color: #5d5d5f;
  text-align: center;
  font-family: var(--regular);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 24px;
}
:deep(.otp-input) {
  width: 24px;
  height: 24px;
  padding: 5px;
  color: #020105;
  text-align: center;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  border: none;
}
:deep(.otp-input:focus) {
  outline: none;
}
.code-input {
  border-radius: 8px;
  border: 1px solid #e0e0ed;
  background: #fff;
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  position: relative;
}
.image {
  display: flex;
  justify-content: center;
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
.image img {
  max-height: 345px;
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
}
.btns {
  padding-top: 28px;
  padding-bottom: 28px;
}
</style>
