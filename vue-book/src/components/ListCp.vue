<template>
  <h1>List</h1>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ListCp",
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
