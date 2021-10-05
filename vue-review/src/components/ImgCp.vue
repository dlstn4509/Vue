<template>
  <div class="img-wrapper">
    <img :src="src" :alt="title" class="w-100">
  </div>
</template>

<script>
export default {
  name: 'ImgCp',
  props: ['src', 'title'],
};
</script>

<style lang="scss" scoped>
  .img-wrapper {
    margin: 1em 0;
    padding: .5em;
    border: 1px solid $secondary-color;
  }
</style>
