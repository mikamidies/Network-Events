<script>
export default {
  name: "category-select-block",
  data() {
    return {
      actives: []
    }
  },
  methods: {
    toActive(id) {
      this.actives.push(id)
    }
  }
}
</script>

<template>
  <div class="category-select-block">
    <div>
      <h4 class="title">Sohangizni belgilang</h4>
      <h6 class="subtitle">Выберите свое направление из категории</h6>
      <div class="list list-bottom">
        <button class="active">
          Правительство и политика
        </button>
        <button class="selected">
          <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3.5" r="3" fill="#1878F3"/>
          </svg>
          Бизнесмен
        </button>
        <button>Развлечение</button>
        <button>Образование</button>
      </div>
    </div>
    <div>
      <h6 class="subtitle">Выберите свое направление из категории</h6>
      <div class="list">
        <button>Правительство и политика</button>
        <button>Бизнесмен</button>
        <button>Развлечение</button>
        <button>Образование</button>
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
