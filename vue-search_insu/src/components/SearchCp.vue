<template>
  <div class="search-wrap">
    <input type="text" class="form-control form-control-lg" v-model="query" @keyup="onSearch">
  </div>
</template>

<script>
export default {
  name: 'SearchCp',
  props: [],
  methods: {
    onSearch() {
      
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
