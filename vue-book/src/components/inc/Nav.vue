<template>
  <ul class="navi-wrap">
    <li>
      <router-link to="/book">
        도서리스트
        <small>(Pagination)</small>
      </router-link>
    </li>
    <li>
      <router-link to="/book2">
        도서리스트
        <small>(Infinite Scroll)</small>
      </router-link>
    </li>
    <li>
      <router-link to="//127.0.0.1:3000">
        도서리스트
        <small>(Express)</small>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
ul.navi-wrap {
  @include flex;
  li {
    font-size: 0.75em;
    cursor: pointer;
    a {
      display: block;
      padding: 0.875em 1.25em;
    }
    &:hover {
      background-color: $secondary-color;
      color: $dark-color;
    }
  }
}
</style>
