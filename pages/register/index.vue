<template lang="html">
  <div class="master">
    <!--    <div class="block">-->
  <div class="image-info">
    <RegisterLogo/>
    <div class="image-texts">
      <h4>Hush kelibsiz</h4>
      <p>Shaxsiylashtirilgan sahifalar uchun barchasi
        bitta platformada</p>
    </div>
  </div>
    <div class="bg-image">
      <img src="../../assets/img/register-bg.png" alt="">
    </div>
    <div class="container info-block">
      <div>
        <div class="info-texts">
          <h4>Telefon raqam</h4>
          <p>Telefon raqamingizga tasdiqlash kodi yuboriladi</p>
        </div>
        <a-form-model class="" :model="form" ref="ruleForm" :rules="rules">
          <a-form-model-item class="form-item mb-0" prop="phone_number">
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
            </div>
            <p class="input-btext">Kiritgan telefon raqamingizga tasdiqlash kodi yuboriladi</p>
          </a-form-model-item
          >
        </a-form-model>
      </div>
      <div class="btns">
        <button
          @click="submit"
          :class="{ disabled: loading, disabled: phone_number_length }"
        >
          <span v-if="!loading">{{ $store.state.translations["login.continue"] }}</span>
          <LoaderBtn v-else/>
        </button>
      </div>
      <!--      </div>-->
    </div>
  </div>
</template>
<script>
import sendNUmberApi from "@/api/authApi";
import moment from "moment";
import LoaderBtn from "../../components/loader-btn.vue";
import RegisterLogo from "~/components/icons/register-logo.vue";

export default {
  layout: "empty",
  data() {
    return {
      loading: false,
      phone_number_length: true,
      form: {
        phone_number: "",
      },

      rules: {
        phone_number: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
          {
            min: 12,
            message: "The length of the number should not be less than 9",
            trigger: "change",
          },
        ],
      },
    };
  },
  mounted() {
    // const current_date = new Date();
    // const real_min = moment(current_date).format("HH:mm");
    if (localStorage.getItem("accessToken")) this.$router.push("/");
    // const timer_time = JSON.parse(localStorage.getItem("timer_time"));
    // if (timer_time) {
    //   console.log("real_min", real_min, real_min.split(":")[0]);
    //   console.log("old real_min", timer_time.real_min, timer_time.real_min.split(":"));
    //   console.log(
    //     "old timer_min",
    //     timer_time.timer_min,
    //     Number(timer_time.real_min.split(":")[1]) + timer_time.timer_min / 60
    //   );
    //   if (real_min.split(":")[0] == timer_time.real_min.split(":")[0]) {
    //     console.log("asdas");
    //     if (
    //       real_min.split(":")[1] <
    //       Number(timer_time.real_min.split(":")[1]) + timer_time.timer_min / 60
    //     ) {
    //       console.log("asd12312as");

    //       this.$router.push("/register/check-code");
    //     }
    //   }
    // }
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
        this.loading = true;
        const data = await sendNUmberApi.sendNumber(this.$axios, form);
        const current_date = new Date();
        const real_min = moment(current_date).format("HH:mm");
        localStorage.setItem(
          "timer_time",
          JSON.stringify({real_min: real_min, timer_min: data?.data?.expiration_date})
        );
        await this.$router.push("/register/check-code");
      } catch (e) {
        // if (e.response.status == 403) {
        if (e.response.data.wait) {
          await this.$router.push("/register/check-code");
        } else {
          this.$notification["error"]({
            message: "Error",
            // description: "Код для этого телефона уже отправлен",
            description: e.response.data.messae,
          });
        }
        // }
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    "form.phone_number"(e) {
      if (e.length == 12) {
        this.phone_number_length = false;
      } else {
        this.phone_number_length = true;
      }
    },
  },
  components: {
    RegisterLogo,
    LoaderBtn,
  },
};
</script>
<style lang="css" scoped>
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

.disabled {
  pointer-events: none;
  opacity: 0.5;
}


.image img {
  max-height: 345px;
}

.master {
  height: 100vh;
  display: grid;
grid-template-rows: 4fr  554px;
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


.form-item .input-context {
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #E0E0ED;
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
  height: 50px;
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
.btns{
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
</style>
