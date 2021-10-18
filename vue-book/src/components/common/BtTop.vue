<template>
  <div class="bt-up" v-show="isTop" @click="moveTop">
    <i class="fa fa-arrow-up"></i>
  </div>
</template>

<script>
export default {
  name: "BtTop",
  data() {
    return {
      isTop: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.isTop = window.scrollY > 500 ? true : false;
    },
    moveTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.bt-up {
  width: 50px;
  height: 50px;
  font-size: 1.25em;
  @include flex($h: center, $v: center);
  @include layer($p: fixed, $b: 3vh, $r: 3vw);
  background-color: $dark-color;
  color: #fff;
  opacity: 0.5;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
}
</style>
