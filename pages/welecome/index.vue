<template>
    <div class="main">
        <div class="container">
            <div class="head">
                <img src="@/assets/img/logo.svg" alt="Justlink logo">

                <a-dropdown v-model="dropdown" :trigger="['click']">
                    <button class="drop-btn">
                        <span v-if="$i18n.locale === 'ru'">
                            <LangRuIcon />
                            <strong>Ру</strong>
                        </span>

                        <span v-if="$i18n.locale === 'uz'">
                            <LangUzIcon />
                            <strong>Uz</strong>
                        </span>

                        <svg :class="{ rotate180: dropdown }" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.8335 8.3335L10.0002 11.6668L14.1668 8.3335" stroke="#020105" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <a-menu slot="overlay">
                        <div class="dowpdown_body">
                            <button v-for="locale in locales" :class="{ active: $i18n.locale === locale.code }"
                                :key="locale.id" @click="changeLang(locale)">

                                <span v-if="locale.code === 'ru'">
                                    <LangRuIcon /> <strong>Ру</strong>
                                </span>

                                <span v-if="locale.code === 'uz'">
                                    <LangUzIcon /> <strong>Uz</strong>
                                </span>
                            </button>
                        </div>
                    </a-menu>
                </a-dropdown>
            </div>
        </div>

        <div class="welecome">
            <img class="usersImg" src="@/assets/img/welecome-bg.webp" alt="user background">
            <img class="logo" src="@/assets/img/welecome-logo.svg" alt="">
        </div>

        <div class="container">
            <div class="info">
                <h1>{{ $store.state.translations["login.welecome"] }}</h1>
                <h4>{{ $store.state.translations["login.welecome-desc"] }}</h4>

                <button @click="toRegister">{{ $store.state.translations["login.login"] }}</button>

                <p>{{ $store.state.translations["login.welecome-auth"] }}</p>
            </div>

        </div>

        <div style="margin-top: 50px; margin-bottom: -200px;" class="sponsor">
            <div class="imgs">
                <img width="81px" src="@/assets/img/sponsor1.png" alt="trend systems" />
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                        d="M11 1.24391L6.125 5.99999M6.125 5.99999L1 11M6.125 5.99999L1.00003 1M6.125 5.99999L11 10.7561"
                        stroke="black" stroke-width="0.5" />
                </svg>
                <img width="81px" src="@/assets/img/sponsor2.svg" alt="ndc.uz" />
            </div>

            <p>
                {{ $store.state.translations["main.sponsor-text"] }} <br>
                <a href="#">{{ $store.state.translations["main.sponsor-link"] }}</a>
            </p>
        </div>
    </div>
</template>

<script>
import LangRuIcon from "@/components/icons/lang-ru-icon.vue";
import LangUzIcon from "@/components/icons/lang-uz-icon.vue";

export default {
    components: {
        LangUzIcon, LangRuIcon,
    },
    data() {
        return {
            dropdown: false,
            locales: [
                { id: 1, code: "uz", name: "Uzbek" },
                // {
                //   id: 2,
                //   code: "en",
                //   name: "English",
                // },
                {
                    id: 3,
                    code: "ru",
                    name: "Русский",
                },
            ],
        }
    },
    methods: {
        changeLang(locale) {
            this.$router.push(this.switchLocalePath(locale.code))
        },
        toRegister() {
            this.$router.replace('/register')
        }
    }
}
</script>

<style scoped>
.welecome {
    position: relative;
    margin-top: 24px;
    width: 100%;
    margin: 0 auto;
    max-width: 500px;
    height: 257px;
}

.welecome .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
}

.welecome .usersImg {
    width: 100%;
    height: 100%;
}

.info {
    margin-top: 24px;
    text-align: center;
}

.info h1 {
    max-width: 320px;
    margin: 0 auto;
    color: var(--black);
    font-size: 28px;
    font-weight: 700;
    line-height: 150%;
    text-transform: uppercase;
    font-family: sans-serif;
}

.info h4 {
    color: #5D5D5F;
    margin-top: 6px;
    font-size: 18px;
    padding-bottom: 16px;
    border-bottom: 1px solid #EBEBEB;
}

.info p {
    margin-top: 6px;
    color: #5D5D5F;
    font-size: 18px;
}

.info button {
    outline: none;
    border: none;
    background: var(--blue);
    display: block;
    width: 100%;
    border-radius: 40px;
    padding: 20px;
    color: #ffffff;
    font-size: 18px;
    margin: 16px 0;
}

.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px;
    padding-top: 12px;
    margin-bottom: 24px;
}

.head img {
    margin-left: -15px;
}

.dowpdown_body {
    z-index: 50;
    background: #F5F5F7;
    padding: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
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

.dowpdown_body button:last-child {
    border-top: 1px solid #fff;
    padding-top: 7px;
}

.dowpdown_body span {
    color: #000;
    display: flex;
    gap: 12px;
}

.drop-btn {
    background: transparent;
    border: 1px solid #F5F5F7;
    padding: 8px;
    border-radius: 40px;
    font-family: var(--regular);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
    color: #000000;
    display: flex;
    gap: 8px;
    align-items: center;
}

.drop-btn span {
    display: flex;
    gap: 6px;
}
</style>