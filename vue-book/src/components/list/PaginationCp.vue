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
  props: ["page"],
  created() {
    this.$store.dispatch("ACT_BOOKS", 1);
    this.$store.dispatch("ACT_LOADING", true);
  },
  mounted() {
    console.log(this.page);
  },
};
</script>

<style lang="scss" scoped></style>
