<template>
  <div class="pager-wrap">
    <a href="/?page=1" class="pager fa fa-step-backward"></a>
    <a href="/?page=1" class="pager fa fa-backward"></a>
    <a href="/?page=1" class="pager fa fa-caret-left"></a>
    <a href="/?page=1" class="pager active">1</a>
    <a href="/?page=1" class="pager">2</a>
    <a href="/?page=1" class="pager fa fa-caret-right"></a>
    <a href="/?page=1" class="pager fa fa-forward"></a>
    <a href="/?page=1" class="pager fa fa-caret-right"></a>
  </div>
</template>

<script>
export default {
  name: "PagerCp",
  props: ["pager"],
  created() {
    console.log(this.pager);
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
