<template>
  <header class="header-wrapper">
    <Logo />
    <Nav class="navi-pc" />
    <NavMobile class="navi-mo" />
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
import NavMobile from "./NavMobile.vue";

export default {
  name: "Header",
  components: { Nav, Logo, NavMobile },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  @include rel;
  @include flex($h: space-between);
  background-color: $dark-color;
  color: $light-color;
  font-size: 1.25em;
  .navi-pc {
    @include MD {
      display: none;
    }
  }
  .navi-mo {
    display: none;
    @include MD {
      display: block;
    }
  }
}
</style>
