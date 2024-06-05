<script>
import specilficationsApi from "@/api/specilficationsApi";

export default {
  name: "category-select-block",
  props: ['categories'],
  data() {
    return {
      activeCategory: null,
      specList: [],
      activeSpecs: [],
      activeCategories: []
    }
  },

  methods: {
    myActiveSpecs(specs) {
      console.log(specs)
      this.activeSpecs = specs.map((elem) => elem.id);
      this.activeCategories = specs.map((elem) => elem.category)
    },
    toActive(id) {
      this.activeCategory = id
      this.__GET_SPEC(id)
    },
    selectSpecs(spec) {
      if (this.activeSpecs.includes(spec.id)) {
        this.activeSpecs = this.activeSpecs.filter(item => item !== spec.id);
        let index = this.activeCategories.indexOf(spec.category);
        if (index !== -1) {
          this.activeCategories.splice(index, 1);
        }
      } else {
        this.activeSpecs.push(spec.id);
        this.activeCategories.push(spec.category)
      }
      this.$emit('selectSpec', this.activeSpecs)
    },
    async __GET_SPEC(id) {
      try {
        const data = await specilficationsApi.getSpecList({
          params: {
            category: id
          }
        });
        this.specList = data?.data?.results
      } catch (e) {
      }
    },
  },
  watch: {
    '$store.state.profile.id'() {
      this.activeSpecs
    }
  }
}
</script>

<template>
  <div class="category-select-block">
    <div>
      <h4 class="title">{{ $store.state.translations['main.spec_title'] }}</h4>
      <h6 class="subtitle">{{ $store.state.translations['main.spec_title'] }}</h6>
      <div class="list list-bottom">
        <button @click="toActive(category?.id)"
                :class="{active: activeCategory === category?.id, selected: activeCategories.includes(category?.id)}"
                v-for="category in categories"
                :key="category?.id">
          {{ category.title }}
        </button>
      </div>
    </div>
    <div>
      <h6 class="subtitle">{{ $store.state.translations['main.spec_title2'] }}</h6>
      <div class="list" v-if="specList.length > 0">
        <button :class="{active: activeSpecs.includes(spec.id)}" @click="selectSpecs(spec)" v-for="spec in specList"
                :key="spec?.id">{{ spec?.title }}
        </button>
      </div>
      <div v-else>
        <a-empty size="small"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.category-select-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title {
  font-family: var(--decor-bd);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 24px;
}

.subtitle {
  font-family: var(--semi);
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  text-align: left;

}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 16px;
}

.list button {
  border: 2px solid #EBEBEB;
  padding: 0 16px;
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 36px;
  background: #fff;
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  gap: 8px;

}

.list-bottom {
  padding-bottom: 24px;
  border-bottom: 1px solid #EBEBEB
}

.active {
  border-color: #1878F3 !important;
  color: #1878F3;
}

.selected {
  color: #1878F3;
}
</style>
