<template>
  <ul class="pager-wrap">
    <li @click="changePage" :title="firstPage" class="pager">
      <i class="fa fa-step-backward"></i>
    </li>
    <li @click="changePage" :title="prevPager" class="pager">
      <i class="fa fa-backward"></i>
    </li>
    <li @click="changePage" :title="prevPage" class="pager">
      <i class="fa fa-caret-left"></i>
    </li>
    <li
      class="pager"
      v-for="v in pageArr"
      :key="v"
      :class="`pager ${page === v ? 'active' : ''}`"
      :title="v"
      @click="changePage"
    >
      {{ v }}
    </li>
    <li @click="changePage" :title="nextPage" class="pager">
      <i class="fa fa-caret-right"></i>
    </li>
    <li @click="changePage" :title="nextPager" class="pager">
      <i class="fa fa-forward"></i>
    </li>
    <li @click="changePage" :title="lastPage" class="pager">
      <i class="fa fa-step-forward"></i>
    </li>
  </ul>
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
  methods: {
    changePage(e) {
      const _page = e.currentTarget.title;
      if (this.page != _page) {
        this.$store.dispatch("ACT_BOOKS", _page);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pager-wrap {
  margin: 2em auto;
  @include flex($h: center);
  .pager {
    cursor: pointer;
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
