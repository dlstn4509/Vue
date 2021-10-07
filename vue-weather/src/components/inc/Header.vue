<template>
  <header class="header-wrapper">
    <h1 class="logo">
      <b-icon-image />
      날씨앱
      <small>v 0.1</small>
    </h1>
    <Nav />
  </header>
</template>

<script>

import Nav from './Nav.vue'

export default {
  name: 'Header',
  components: {
    Nav
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  @include flex($h: space-between, $v: center);
  background-color: $dark-color;
  color: $light-color;
  font-size: 1.5em;
  .logo {
    padding: .5em;
  }
}
</style>
