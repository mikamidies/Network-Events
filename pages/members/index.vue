<template>
    <div>
        <div class="wrap">
            <div class="container">
                <div class="top">
                    <h4 style="font-size: 18px;" class="title">{{ $store.state.translations['members.title'] }}</h4>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="search__wrap">
                <h4 class="title">{{ $store.state.translations["main.search-event"] }}</h4>

                <form @submit.prevent="GetMembers" class="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z"
                            fill="#9A999B" />
                    </svg>

                    <label for="search"></label>

                    <input ref="searchInput" type="text" id="search" v-model="search" @input="onSearch"
                        :placeholder="$store.state.translations['main.search-event']" />

                    <button type="submit" class="search__button">{{ $store.state.translations["main.search-btn"]
                        }}</button>
                </form>

                <div v-if="members.length > 0" class="memberList">
                    <h4 style="font-size: 18px;" class="title">{{ $store.state.translations['members.results'] }}</h4>

                    <div class="items">
                        <div class="item" v-for="member in members" :key="member?.id"
                            @click="$router.push(localePath(`/member/${member?.id}`))">
                            <div class="person">
                                <img loading="lazy" v-if="member?.image" :src="member?.image" alt="" />
                                <img v-else src="@/assets/img/user.png" alt="" />
                            </div>
                            <div class="content">
                                <p class="name">{{ member?.user?.full_name }}</p>
                                <p class="status">{{ member?.job_title }}</p>
                                <p class="company">{{ member?.company_name }}</p>
                            </div>
                            <svg class="link_icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M6.53151 17.5856C6.20806 17.3269 6.15562 16.8549 6.41438 16.5315L10.0396 12L6.41438 7.46849C6.15562 7.14505 6.20806 6.67308 6.53151 6.41432C6.85495 6.15556 7.32692 6.208 7.58568 6.53145L11.5857 11.5315C11.8048 11.8054 11.8048 12.1946 11.5857 12.4685L7.58568 17.4685C7.32692 17.7919 6.85495 17.8444 6.53151 17.5856Z"
                                    fill="#1878F3" />
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.5315 17.5856C12.2081 17.3269 12.1556 16.8549 12.4144 16.5315L16.0396 12L12.4144 7.46849C12.1556 7.14505 12.2081 6.67308 12.5315 6.41432C12.855 6.15556 13.3269 6.208 13.5857 6.53145L17.5857 11.5315C17.8048 11.8054 17.8048 12.1946 17.5857 12.4685L13.5857 17.4685C13.3269 17.7919 12.855 17.8444 12.5315 17.5856Z"
                                    fill="#1878F3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div v-else class="empty">
                    <img src="@/assets/img/search_empty.svg" alt="empty">
                    <h5>{{ status ? $store.state.translations['members.not-searched'] : $store.state.translations['members.not-found'] }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import eventsApi from "../../api/eventsApi";

export default {
    data() {
        return {
            search: "",
            members: [],
            status: true,
        }
    },
    methods: {
        onSearch(e) {
            this.search = e.target.value;
        },
        async GetMembers() {
            if (this.search.length) {
                try {
                    const { data: { results } } = await eventsApi.getAllMembers(this.search);

                    this.members = results;

                    if (!results.length) {
                        this.status = false;
                    } else {
                        this.status = true;
                    }
                } catch (error) {
                    console.log(error.message);
                }
            } else {
                this.members = [];
            }
        },
    },
    mounted() {
        this.$refs.searchInput.focus();
    }
}
</script>

<style scoped>
.wrap {
    margin-top: 10px;
    border-bottom: 1px solid var(--grey-8, #ebebeb);
}

.memberList {
    margin-top: 24px;
}

.empty {
    margin-top: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
}

.empty h5 {
    font-size: 18px;
    font-weight: 500;
}

.search__wrap {
    margin-top: 24px;
    padding: 12px;
    background: var(--White, #fff);
    margin: 0 -16px;
}

.search {
    position: relative;
    border-radius: 8px;
    border: 1px solid var(--grey-8, #ebebeb);
    background: #F5F5F7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    padding-left: 12px;

}

.search label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.search__button {
    cursor: pointer;
    z-index: 10;
    outline: none;
    border: none;
    font-weight: 500;
    background: #5C46E5;
    padding: 12px;
    color: #ffffff;
    border-radius: 4px;
}

.search input {
    margin-left: 8px;
    color: black;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    border: 0;
    background: transparent;
    width: 90%;
}

.search input:focus {
    outline: none;
}

.items {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
}

.link {
    display: flex;
    justify-content: center;
}

.link a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--Facebook-blue, #1878f3);
    font-family: var(--medium);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    /* 19.6px */
    border-radius: 500px;
    background: var(--Apple-Grey, #f5f5f7);
    min-width: 182px;
    padding: 12px;
}

.guests .name {
    color: var(--Black, #020105);
    font-family: var(--decor-bd);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* 21px */
    letter-spacing: -0.28px;
    margin-bottom: 4px;
}

.status {
    margin-top: 4px;
    color: var(--Facebook-blue, #1878f3);
    font-family: var(--medium);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    /* 19.6px */
    margin-bottom: 2px;
}

.company {
    color: var(--grey-40, #9a999b);
    font-family: var(--medium);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    max-width: 98%;
}

.item {
    border-radius: 12px;
    border: 1px solid var(--grey-8, #ebebeb);
    padding: 16px;
    display: grid;
    grid-template-columns: 2fr 8fr;
    gap: 16px;
    cursor: pointer;
    position: relative;
}

.link_icon {
    position: absolute;
    bottom: 8px;
    right: 8px;
}

.person img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 8px;
}
</style>