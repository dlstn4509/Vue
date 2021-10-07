<template>
  <ul>
    <List />
    {{food}}
  </ul>
</template>

<script>
import List from './ListCp.vue';

export default {
  name: 'ListWrapCp',
  components: { List },
  props: ['food'],
};
</script>

<style lang="scss" scoped>

</style>
