<template>
  <h1 class="logo">
    <router-link to="/">
      <i class="fa fa-book" />
      Vue 도서관리시스템
      <small>v 0.1</small>
    </router-link>
  </h1>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
h1.logo {
  a {
    display: block;
    padding: 0.5em;
  }
}
</style>
