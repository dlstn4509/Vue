<template>
  <div class="search-wrap">
    <input type="text" class="form-control form-control-lg" value="" @keyup="onSearch">
  </div>
</template>

<script>
export default {
  name: 'SearchCp',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(e) {
      this.value = e.target.value;
      this.$emit('@onSearch', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
