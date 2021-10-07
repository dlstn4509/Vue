<template>
  <div class="container my-3">
    <Title :title="mainTitle" />
    <Search @@change="onChangeQuery" />
  </div>
</template>

<script>
import Title from './components/TitleCp.vue';
import Search from './components/SearchCp.vue';

export default {
  name: 'App',
  components: { Title, Search },
  data() {
    return {
      mainTitle: '다팔아 쇼핑몰 인수',
      query: '',
    };
  },
  methods: {
    onChangeQuery(v) {
      this.query = v;
    },
  },
};
</script>

<style lang="scss">

</style>
