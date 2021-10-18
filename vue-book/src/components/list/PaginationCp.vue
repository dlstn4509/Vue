<template>
  <section class="wrapper list-wrapper">
    <TableCp :books="GET_BOOKS.books" />
    <PagerCp :pager="GET_BOOKS.pager" />
  </section>
</template>

<script>
import TableCp from "../common/TableCp.vue";
import PagerCp from "../common/PagerCp.vue";
import { mapGetters } from "vuex";

export default {
  name: "PaginationCp",
  components: { TableCp, PagerCp },
  computed: {
    ...mapGetters(["GET_BOOKS"]),
  },
  created() {
    this.$store.dispatch("ACT_LOADING", true);
    this.$store.dispatch("ACT_BOOKS", { page: 1 });
  },
  updated() {
    this.$store.dispatch("ACT_LOADING", false);
  },
};
</script>

<style lang="scss" scoped></style>
