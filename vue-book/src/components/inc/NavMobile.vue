<template>
  <div class="navi-mo-wrap">
    <i class="fa fa-bars" @click="togleNaviWrap"></i>
    <transition name="fade" mode="out-in">
      <ul class="navi-wrap" v-show="isVisible">
        <li>
          <router-link to="/">
            도서리스트
            <small>(Pagination)</small>
          </router-link>
        </li>
        <li>
          <router-link to="/infinite">
            도서리스트
            <small>(Infinite Scroll)</small>
          </router-link>
        </li>
        <li>
          <a href="http://127.0.0.1:3000/book">
            도서리스트
            <small>(Express)</small>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavMobile",
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    togleNaviWrap() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.navi-mo-wrap {
  .fa-bars {
    cursor: pointer;
    padding: 0.5em 1em;
    &:hover {
      background-color: $secondary-color;
      color: $dark-color;
    }
  }
  .navi-wrap {
    @include abs;
    width: 100%;
    left: 0;
    background-color: $grey-color;
    border-top: 1px solid $secondary-color;
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
}
</style>
