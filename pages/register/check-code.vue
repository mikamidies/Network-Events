<template lang="html">
  <div class="master">
    <div class="image-info">
      <a-dropdown :trigger="['click']">
        <button class="drop-btn">
          <LangRuIcon />

          Русский <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.8335 8.33337L10.0002 11.6667L14.1668 8.33337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </button>
        <a-menu slot="overlay">
         <div class="dowpdown_body">
           <button> <LangRuIcon/>Русский</button>
           <button> <LangRuIcon/>Uzbek</button>
           <button> <LangRuIcon/>English</button>
         </div>
        </a-menu>
      </a-dropdown>
      <div class="image-texts">
        <h4>{{ $store.state.translations["login.sms_title"] }}</h4>
        <p>{{ $store.state.translations["login.sms_subtitle"] }}</p>
      </div>
    </div>
    <div class="bg-image">
      <img src="../../assets/img/register-bg.png" alt="">
    </div>
    <div class="container info-block">
      <div>

        <div class="info-texts">
          <h4>{{ $store.state.translations["login.enter_code"] }}</h4>
          <p >
            +{{
              form.phone_number &&
              `${form.phone_number}`
                .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
                .filter((item, index) => index != 0)
                .join(" ")
            }}
            {{ $store.state.translations["login.number-text"] }}
          </p>
        </div>
        <a-form-model class="" :model="form" ref="ruleForm" :rules="rules">
          <a-form-model-item class="form-item mb-0" prop="sms_code">
            <p class="sub">{{ $store.state.translations["login.enter-code"] }}</p>
            <div class="code-input position-relative">
              <!-- <v-otp-input
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
              /> -->
              <input
                type="number"
                pattern="/^-?\d+\.?\d*$/"
                v-model="form.sms_code"
                onKeyPress="if(this.value.length==4) return false;"
                placeholder="****"
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
          </a-form-model-item>
        </a-form-model
        >
        <div>
          <button class="resend" @click="resent" :class="{ disabled: time != 0 }">
            {{ $store.state.translations["login.resend"] }}
          </button>
        </div>
      </div>
      <div class="btns">
        <button @click="submit" :class="{ disabled: loading, disabled: code_length }">
          <span v-if="!loading">{{ $store.state.translations["login.continue"] }}</span>
          <LoaderBtn v-else/>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import sendNUmberApi from "@/api/authApi";
import RegisterLogo from "~/components/icons/register-logo.vue";
import LangRuIcon from "~/components/icons/lang-ru-icon.vue";

export default {
  components: {LangRuIcon, RegisterLogo},
  layout: "empty",
  data() {
    return {
      loading: false,
      code_length: true,
      form: {
        phone_number: "",
        sms_code: "",
      },
      time: 60,
      timeProgress: 100,
      rules: {
        sms_code: [
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
    // let inputs = document.querySelectorAll(".otp-input");
    // inputs.forEach((item, index) => {
    //   if (index != 0 && !inputs[index - 1].value) {
    //     item.classList.add("disabledItem");
    //   } else {
    //     item.classList.remove("disabledItem");
    //   }
    // });
    // this.setInputPlaceholder();
    let time1 = 0;
    if (localStorage.getItem("phone_number"))
      this.form.phone_number = localStorage.getItem("phone_number");

    setInterval(() => {
      if (!localStorage.getItem("timer")) localStorage.setItem("timer", 60);
      this.time = localStorage.getItem("timer");
      if (this.time > 0) {
        this.time = this.time - 1;
        time1 = this.time;
        localStorage.setItem("timer", this.time);
        this.timeProgress = (time1 / 60) * 100;
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
    resent() {
      this.__SEND_NUMBER({phone_number: this.form.phone_number});
      localStorage.setItem("timer", 60);
      localStorage.setItem("progress", 100);
    },
    async __SEND_CODE(form) {
      try {
        this.loading = true;
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
      } finally {
        this.loading = false;
      }
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
    // handleOnComplete(value) {
    //   console.log("OTP completed: ", value);
    // },
    // handleOnChange(val) {
    //   let inputs = document.querySelectorAll(".otp-input");
    //   inputs.forEach((item, index) => {
    //     if (index != 0 && !inputs[index - 1].value) {
    //       item.classList.add("disabledItem");
    //     } else {
    //       item.classList.remove("disabledItem");
    //     }
    //     if (val.length + 1 < inputs.length) {
    //       inputs[val.length + 1].classList.add("disabledItem");
    //     }
    //   });
    //   this.form.sms_code = val;
    // },
    // setInputPlaceholder() {
    // this.$refs.otpInput.$el
    //   .querySelectorAll("input")
    //   .forEach((input) => (input.placeholder = "*"));
    // },
  },
  watch: {
    "form.sms_code"(e) {
      if (e.length == 4) {
        this.code_length = false;
      } else {
        this.code_length = true;
      }
    },
  },
};
</script>
<style lang="css" scoped>
.disabled {
  pointer-events: none;
  opacity: 0.5;
}

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
  height: 100vh;
  display: grid;
  grid-template-rows: 4fr 7fr;
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
  border: none;
  background: #fff;
  width: 100%;
  /* padding: 0 16px;// */
  color: #020105;
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 20px;
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

.btns button {
  border-radius: 52px;
  background: #1878F3;
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


.info-block {
  height: 100%;
  border-radius: 40px 40px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  z-index: 10;
  padding-top: 24px;

}

.info-texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}

.info-texts h4 {
  font-family: var(--decor-bd);
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  text-align: center;

}

.image-texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.image-texts p {
  font-family: var(--regular);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  color: #fff;
  max-width: 80%;
}

.image-texts h4 {
  font-family: var(--decor-bd);
  font-size: 28px;
  font-weight: 700;
  line-height: 33.6px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
}

.info-texts p {
  font-family: var(--regular);
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: center;
  max-width: 80%;
  text-align: center;
  color: #5D5D5F;

}

.image-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 100%;
  gap: 16px;
}

.input-btext {
  font-family: var(--regular);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #9A999B;
  margin-top: 12px;
}
.bg-image {
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
}

.bg-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dowpdown_body {
  background: #FFFFFF52;
  border: 1px solid #FFFFFF7A;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  gap: 7px;
}

.dowpdown_body button {
  font-family: var(--regular);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #FFFFFF;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.drop-btn {
  background: #FFFFFF52;
  border: 1px solid #FFFFFF7A;
  padding: 8px;
  border-radius: 43px;
  font-family: var(--regular);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #fff;
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
