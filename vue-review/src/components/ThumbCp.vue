<template>
  <li class="thumb">
    <img :src="food.src" :alt="food.title" class="w-100" @click="onChange">
  </li>
</template>

<script>
export default {
  name: 'ThumbCp',
  props: ['food'],
  methods: {
    onChange(e) {
      this.$emit('@onChange', { src: e.target.src, title: e.target.alt });
    },
  },
};
</script>

<style lang="scss" scoped>
  .thumb {
    margin: 1%;
    background-color: $light-color;
    img {
      opacity: .5;
      transition: all .75s;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
</style>
