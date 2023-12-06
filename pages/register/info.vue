<template lang="html">
  <div class="wrap">
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
    <div class="container">
      <div class="edit-page">
        <h4 class="page-title">Asosiy malumot</h4>
        <a-form-model class="" :model="form" ref="ruleForm" :rules="rules">
          <div class="list">
            <a-form-model-item prop="full_name" class="form-item mb-0 required">
              <p class="sub">Isim va Familya</p>
              <input type="text" v-model="form.full_name" placeholder="Ism" />
            </a-form-model-item>
            <a-form-model-item
              prop="client_data.company_name"
              class="form-item required mb-0"
            >
              <p class="sub">Korxona nomi</p>
              <input
                type="text"
                v-model="form.client_data.company_name"
                placeholder="Korxona nomi / Freelancer"
              />
            </a-form-model-item>
            <a-form-model-item
              prop="client_data.job_title"
              class="form-item required mb-0"
            >
              <p class="sub">Lavozimingiz / Mutahasisligingiz</p>
              <input
                type="text"
                v-model="form.client_data.job_title"
                placeholder="CEO / Dizayner / Developer ..."
              />
            </a-form-model-item>
          </div>
          <div class="info">
            <h5 class="info-title">Qoshimcha malumotlar</h5>
            <p class="info-desc">
              Qoshimcha malumotlarni keynchalik profilingizdan kiritishingiz mumkin
            </p>
            <div class="upload-card">
              <div class="image">
                <img v-if="image" :src="image" alt="" /><img
                  v-else
                  src="@/assets/img/user.png"
                  alt=""
                />
              </div>
              <div class="body">
                <div class="text">
                  <h5>Profil rasmingiz</h5>
                  <p>2 MB oshmaslik kerak</p>
                </div>
                <a-upload
                  :action="`${base_url}/upload_image`"
                  :fileList="fileList"
                  @change="handleChange"
                  @preview="handlePreview"
                >
                  <button class="upload-btn">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 6.5L12.5 3.5M12.5 3.5L15.5 6.5M12.5 3.5L12.5 15.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 9.5L7.5 9.5C5.29086 9.5 3.5 11.2909 3.5 13.5L3.5 17.5C3.5 19.7091 5.29086 21.5 7.5 21.5L17.5 21.5C19.7091 21.5 21.5 19.7091 21.5 17.5L21.5 13.5C21.5 11.2909 19.7091 9.5 17.5 9.5L17 9.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </a-upload>
              </div>
            </div>
          </div>
          <div class="list">
            <a-form-model-item prop="client_data.info" class="form-item mb-0">
              <p class="sub">Ozingiz haqingizda qoshimcha</p>
              <textarea
                rows="5"
                v-model="form.client_data.info"
                placeholder="Ma’lumot kiriting"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0">
              <p class="sub">Biznes saytingiz</p>
              <input type="text" v-model="form.client_data.site" placeholder="www." />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0">
              <p class="sub">Instagram</p>
              <input
                type="text"
                v-model="form.client_data.instagram"
                placeholder="@nickname"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0">
              <p class="sub">Telegram</p>
              <input
                type="text"
                v-model="form.client_data.telegram"
                placeholder="@nickname"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0">
              <p class="sub">Linkedin</p>
              <input
                type="text"
                v-model="form.client_data.linkedIn"
                placeholder="https://"
              />
            </a-form-model-item>
          </div>
        </a-form-model>
        <div class="btns">
          <button class="send" @click="submit">Saqlash</button>
          <button class="cancel">Bekor qilish</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EditTop from "../../components/EditTop.vue";
import sendNUmberApi from "@/api/authApi";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  layout: "empty",

  data() {
    return {
      previewVisible: false,
      previewImage: "",
      form: {
        phone_number: "",
        sms_code: null,
        full_name: "",
        client_data: {
          image: "",
          company_name: "",
          job_title: "",
          info: "",
          site: "",
          instagram: null,
          telegram: "",
          linkedIn: null,
        },
      },
      headers: {
        // authorization: "authorization-text",
      },
      fileList: [],
      rules: {
        full_name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        client_data: {
          job_title: [
            {
              required: true,
              message: "This field is required",
              trigger: "change",
            },
          ],
          company_name: [
            {
              required: true,
              message: "This field is required",
              trigger: "change",
            },
          ],
          info: [
            {
              required: true,
              message: "This field is required",
              trigger: "change",
            },
          ],
        },
      },
      base_url: process.env.BASE_URL,
      image: "",
    };
  },
  methods: {
    submit() {
      this.form.sms_code = localStorage.getItem("accessCode");
      this.form.phone_number = localStorage.getItem("phone_number");
      this.$refs.ruleForm.validate((valid) => valid && this.__SEND_INFO(this.form));
    },
    handleRemove(file) {
      this.fileList = this.fileList.filter((item) => item.uid !== file.uid);
      message.success(`${file.name} file removed`);
    },
    async __SEND_INFO(form) {
      try {
        const data = await sendNUmberApi.sendInfo(form);
        localStorage.setItem("accessToken", data?.data?.access);
        localStorage.setItem("refreshToken", data?.data?.refresh);
        localStorage.removeItem("phone_number");
        localStorage.removeItem("accessCode");
        await this.$router.push("/");
      } catch (e) {}
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
      console.log(fileList);
      if (fileList[0]?.response?.upload_url) {
        this.form.client_data.image = fileList[0]?.response?.upload_url;
        this.image = fileList[0]?.response?.show_url;
      }
    },
  },
  components: {
    EditTop,
  },
};
</script>
<style lang="css" scoped>
:deep(.ant-upload-list-item-list-type-text) {
  display: none;
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
.container {
  padding: 24px 0;
}
.page-title {
  color: #020105;
  text-align: center;
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.36px;
  margin-bottom: 16px;
}
.form-item input,
.form-item textarea {
  border-radius: 8px;
  background: #fff;
  border-radius: 8px;
  border: 2px solid #f5f5f7;
  background: var(--White, #fff);
  width: 100%;
  padding: 0 16px;
  color: #020105;
  font-family: var(--semi);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
}
.form-item textarea {
  padding: 16px;
}
.form-item input {
  height: 56px;
}
.form-item {
  margin-bottom: 0 !important;
}
.form-item input:focus,
.form-item input:focus-visible,
.form-item textarea:focus-visible,
.form-item textarea:focus {
  border: 2px solid #3c4bdc !important;
  outline: none;
}
.form-item .sub {
  color: #020105;
  font-family: var(--semi);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  margin-bottom: 12px;
  position: relative;
  display: inline;
}
.required .sub::after {
  content: "*";
  color: red;
  position: absolute;
  right: -10px;
  top: 0;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.info .info-title {
  color: #020105;
  text-align: center;
  font-family: var(--decor-md);
  font-size: 18px;
  font-style: normal;
  line-height: 120%;
  letter-spacing: -0.36px;
}
.info {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
}
.info .info-desc {
  color: #9a999b;
  text-align: center;
  font-family: var(--regular);
  font-size: 14px;
  font-style: normal;
  line-height: 140%;
}
.btns {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 48px;
}
.btns button {
  border: none;
  height: 56px;
  border-radius: 39px;
  width: 100%;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
}
.btns .send {
  background-color: #1878f3;
  color: #fff;
}
.btns .cancel {
  border: 1px solid #ebebeb;
  color: #f00;
  background-color: #fff;
}
.upload-card {
  border-radius: 16px;
  background: #f5f5f7;
  padding: 10px;
}
.upload-card .image {
  width: 55px;
  height: 55px;
  border-radius: 8px;
  overflow: hidden;
}
.upload-card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.upload-card .body h5 {
  color: #020105;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
}
.upload-card .body p {
  color: #9a999b;
  font-family: var(--regular);
  font-size: 12px;
  font-style: normal;
  line-height: 130%;
}
.upload-card {
  width: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: 55px 1fr;
  margin-top: 16px;
}
.body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.body .text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.upload-btn {
  display: flex;
  width: 55px;
  height: 55px;
  padding: 13px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background: #1878f3;
  border: none;
}
</style>
