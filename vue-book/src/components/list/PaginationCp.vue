<template>
  <section class="wrapper list-wrapper">
    <TableCp />
  </section>
</template>

<script>
import TableCp from "../common/TableCp.vue";

export default {
  name: "PagerCp",
  components: { TableCp },
  created() {
    this.$store.dispatch("ACT_BOOKS", 1);
  },
};
</script>

<style lang="scss" scoped></style>
