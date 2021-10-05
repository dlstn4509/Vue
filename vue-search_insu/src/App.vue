<template>
  <div class="container">
    <TitleCp :title="logoTitle" />
    <SearchCp  />
    <ThumbCp v-for="v in foods" :key="v.id" :food="v" />
  </div>
</template>

<script>
import axios from 'axios';
import TitleCp from './components/TitleCp.vue';
import SearchCp from './components/SearchCp.vue';
import ThumbCp from './components/ThumbCp.vue';

export default {
  name: 'App',
  data() {
    return {
      foods: [],
      logoTitle: '',
    };
  },
  components: { TitleCp, SearchCp, ThumbCp },
  async created() {
    const { data } = await axios.get('/json/foods.json');
    this.foods = data;
    this.logoTitle = '인수 쇼핑몰';
  },
};
</script>

<style lang="scss">

</style>
