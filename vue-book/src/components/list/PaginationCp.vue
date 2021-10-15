<template>
  <section class="wrapper list-wrapper">
    <TableCp />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TableCp from "../common/TableCp.vue";

export default {
  name: "PagerCp",
  components: { TableCp },
  computed: {
    ...mapGetters(["GET_BOOKS"]),
  },
  watch: {
    GET_BOOKS: function (v) {
      console.log(v);
    },
  },
  created() {
    this.$store.dispatch("ACT_BOOKS");
  },
};
</script>

<style lang="scss" scoped></style>
