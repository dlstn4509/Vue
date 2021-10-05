<template>
  <div class="container my-3">
    <TitleCp :title="mainTitle" />
  </div>
</template>

<script>
import TitleCp from './components/TitleCp.vue';

export default {
  name: 'App',
  components: { TitleCp },
  data() {
    return {
      mainTitle: '다팔아 쇼핑몰 인수',
    };
  },
};
</script>

<style lang="scss">

</style>
