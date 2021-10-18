<template>
  <section class="wrapper list-wrapper">
    <TableCp :isPager="false" />
    <div v-observe="changeVisible" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TableCp from "../common/TableCp.vue";

export default {
  name: "InfiniteCp",
  components: { TableCp },
  data() {
    return {
      page: 1,
      books: [],
    };
  },
  computed: {
    ...mapGetters(["GET_BOOKS"]),
  },
  watch: {
    GET_BOOKS: function (v) {
      this.books.push(...v.books);
    },
  },
  created() {
    this.$store.dispatch("ACT_BOOKS", { page: this.page++, listCnt: 20 });
  },
  methods: {
    changeVisible(isVisible, entry) {
      console.log(entry);
      console.log(isVisible);
      if (isVisible) {
        this.$store.dispatch("ACT_BOOKS", { page: this.page++, listCnt: 20 });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
