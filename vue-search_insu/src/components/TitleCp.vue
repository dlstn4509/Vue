<template>
  <div class="jumbotron">
    <h2 class="logo-title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'TitleCp',
  props: ['title'],
};
</script>

<style lang="scss" scoped>
  .logo-title {
    font-size: 1.5em;
  }
</style>
