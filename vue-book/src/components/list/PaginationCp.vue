<template>
  <section class="wrapper list-wrapper">
    <TableCp :isPager="true" />
  </section>
</template>

<script>
import TableCp from "../common/TableCp.vue";

export default {
  name: "PagerCp",
  components: { TableCp },
  created() {
    this.$store.dispatch("ACT_BOOKS", { page: 1 });
  },
};
</script>

<style lang="scss" scoped></style>
