<template>
  <div class="container">
    <TitleCp :title="logoTitle" />
    <SearchCp @@onSearch="onSearch" />
    <div v-if="huntfoods.length === 0">
      <ThumbCp v-for="v in foods" :key="v.id" :food="v" />
    </div>
    <div v-else>
      <ThumbCp v-for="v in huntfoods" :key="v.id" :food="v" />
    </div>
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
      foods: [], // 원본
      huntfoods: [], // 검색결과
      logoTitle: '',
      huntImg: '',
    };
  },
  components: { TitleCp, SearchCp, ThumbCp },
  async created() {
    const { data } = await axios.get('/json/foods.json');
    this.foods = data;
    this.logoTitle = '인수 쇼핑몰';
  },
  methods: {
    onSearch(v) {
      this.huntImg = v;
      console.log(this.huntImg);
      console.log(this.huntfoods);
      this.huntfoods = this.foods.filter((v2) => v2.title.includes(this.huntImg));
    },
  },
};
</script>

<style lang="scss">

</style>
