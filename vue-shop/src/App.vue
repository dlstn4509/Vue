<template>
  <div class="container my-3">
    <Title :title="mainTitle" />
    <Search @@change="onChangeQuery" />
    <ListWrap v-for="v in foods" :key="v.id" :food="v" />
  </div>
</template>

<script>
import axios from 'axios';
import Title from './components/TitleCp.vue';
import Search from './components/SearchCp.vue';
import ListWrap from './components/ListWrapCp.vue';

export default {
  name: 'App',
  components: { Title, Search, ListWrap },
  data() {
    return {
      mainTitle: '다팔아 쇼핑몰 인수',
      query: '',
      foods: [],
    };
  },
  methods: {
    onChangeQuery(v) {
      this.query = v;
    },
  },
  async created() {
    const { data } = await axios.get('/json/foods.json');
    this.foods = data;
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_common.scss';
</style>
