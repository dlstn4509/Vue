<template>
  <header class="header-wrapper">
    <Logo />
    <Nav />
  </header>
</template>

<script>
import Logo from './Logo.vue'
import Nav from './Nav.vue'

export default {
  name: 'Header',
  components: { Nav, Logo }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  @include flex($h: space-between);
  background-color: $dark-color;
  color: $light-color;
  font-size: 1.5em;
}
</style>
