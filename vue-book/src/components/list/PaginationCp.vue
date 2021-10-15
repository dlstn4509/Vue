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
    console.log(this.$route.params.page);
    this.$store.dispatch("ACT_BOOKS", this.$route.params.page || 1);
  },
};
</script>

<style lang="scss" scoped></style>
