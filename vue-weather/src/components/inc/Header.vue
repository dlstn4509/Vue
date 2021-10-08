<template>
  <header class="header-wrapper">
    <Logo />
    <Nav />
  </header>
</template>

<script>

import Nav from './Nav.vue'
import Logo from './Logo.vue'

export default {
  name: 'Header',
  components: {
    Logo,
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
}
</style>
