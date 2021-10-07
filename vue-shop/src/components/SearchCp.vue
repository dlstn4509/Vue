<template>
  <form class="search-wrapper" @submit.prevent="onSubmit">
    <input
      @input="changeQuery"
      type="text"
      name="query"
      class="form-control form-control-lg"
      autofocus>
    <ButtonClose class="bt-close" />
  </form>
</template>

<script>
import ButtonClose from './form/ButtonClose.vue';

export default {
  name: 'Search',
  components: { ButtonClose },
  data() {
    return {
      query: '',
    };
  },
  methods: {
    changeQuery(e) {
      this.query = e.target.value;
    },
    onSubmit(e) {
      this.query = e.target.query.value;
      e.target.reset();
      e.target.query.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  @include rel;
  .bt-close {
    font-size: 1.25em;
    @include layer($t: calc(50% - .5em), $r: .5em);
  }
}
</style>
