<template lang="html">
  <div>
    <div class="v-pagination">
      <a-pagination
        class="order-pagination"
        v-model.number="current"
        @change="pageChange"
        :total="totalPage"
        :page-size.sync="params.pageSize"
        :hideOnSinglePage="true"
      />
    </div>
  </div>
</template>
<script>
import global from "@/mixins/global";
export default {
  props: ["totalPage", "load","pageSize"],
  mixins: [global],
  mounted() {
    this.getFirstData(this.pageSize);
  },
  methods: {
    async pageChange(e) {
      await this.changePagination(e);
      this.$emit("getData");
    },
  },
  watch: {
    "$route.query.page"(val) {
      if (val != this.current) {
        this.current = val;
      }
    },
  },
};
</script>
<style lang="css" scoped>
.order-pagination :deep(.ant-pagination-item),
.order-pagination :deep(.ant-pagination-prev),
.order-pagination :deep(.ant-pagination-next),
.order-pagination :deep(.ant-pagination-jump-prev),
.order-pagination :deep(.ant-pagination-jump-next) {
  min-width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: var(--bg-grey);
}
.order-pagination :deep(.ant-pagination-prev) a,
.order-pagination :deep(.ant-pagination-next) a {
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
}
.order-pagination :deep(.ant-pagination-jump-next) .ant-pagination-item-container,
.order-pagination :deep(.ant-pagination-jump-prev) .ant-pagination-item-container {
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
.order-pagination :deep(.ant-pagination-jump-next) .ant-pagination-item-container span,
.order-pagination :deep(.ant-pagination-jump-prev) .ant-pagination-item-container span {
  left: auto;
  top: auto;
  bottom: auto;
  right: auto;
}
.order-pagination {
  display: flex;
}
.order-pagination :deep(.ant-pagination-item) a {
  color: var(--grey-40, #9a999b);
  font-family: var(--regular);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.order-pagination :deep(.ant-pagination-item-active) {
  border-color: var(--blue, #5c46e5);
}
.order-pagination :deep(.ant-pagination-item-active) a {
  color: var(--blue, #5c46e5);
}
@media (max-width: 1200px) {
  .order-pagination :deep(.ant-pagination-item),
  .order-pagination :deep(.ant-pagination-prev),
  .order-pagination :deep(.ant-pagination-next),
  .order-pagination :deep(.ant-pagination-jump-prev),
  .order-pagination :deep(.ant-pagination-jump-next) {
    min-width: 48px;
    height: 48px;
  }
  .order-pagination :deep(.ant-pagination-item) a {
    font-size: 14px;
  }
}
</style>
