<template>
  <ul class="list-wrap">
    <li class="list">
    <img :src="food.src" :alt="food.title" class="w-100">
      <ul>
        <li class="title">{{food.title}}</li>
        <li class="desc">{{food.description}}</li>
        <li class="price">${{food.price}}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ThumbCp',
  props: ['food', 'huntImg'],
  data() {
    return {
      searchImg: [],
    };
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
  .list-wrap {
    width: 200px;
  }
</style>
