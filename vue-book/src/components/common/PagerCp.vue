<template>
  <div class="pager-wrap">
    <a :href="`/list/${firstPage}`" class="pager fa fa-step-backward"></a>
    <a :href="`/list/${prevPager}`" class="pager fa fa-backward"></a>
    <a :href="`/list/${prevPage}`" class="pager fa fa-caret-left"></a>
    <a
      v-for="v in pageArr"
      :href="`/list/${v}`"
      :key="v"
      :class="`pager ${page === v ? 'active' : ''}`"
    >
      {{ v }}
    </a>
    <a :href="`/list/${nextPage}`" class="pager fa fa-caret-right"></a>
    <a :href="`/list/${nextPager}`" class="pager fa fa-forward"></a>
    <a :href="`/list/${lastPage}`" class="pager fa fa-caret-right"></a>
  </div>
</template>

<script>
export default {
  name: "PagerCp",
  props: ["pager"],
  data() {
    return {
      prevPager: 1,
      prevPage: 1,
      nextPager: 1,
      nextPage: 1,
      firstPage: 1,
      lastPage: 1,
      pageArr: [],
      page: 1,
    };
  },
  watch: {
    pager: function (v) {
      if (v) {
        console.log(v);
        this.prevPager = v.prevPager;
        this.prevPage = v.prevPage;
        this.nextPager = v.nextPager;
        this.nextPage = v.nextPage;
        this.lastPage = v.totalPage;
        this.page = v.page;
        this.pageArr = [];
        for (let i = v.startPage; i <= v.endPage; i++) {
          this.pageArr.push(i);
        }
      }
    },
  },
  created() {
    console.log(this.$route.params.pager);
  },
};
</script>

<style lang="scss" scoped>
.pager-wrap {
  margin: 2em auto;
  @include flex($h: center);
  .pager {
    padding: 0.625em 0.875em;
    border: 1px solid $accent-color;
    margin-right: -1px;
    color: $accent-color;
    &.active {
      background-color: $info-color;
      color: $light-color;
    }
  }
}
</style>
