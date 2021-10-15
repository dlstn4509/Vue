<template>
  <PaginationCp :page="page || 1" />
</template>

<script>
import PaginationCp from "../components/list/PaginationCp.vue";

export default {
  name: "List",
  props: ["page"],
  components: { PaginationCp },
};
</script>
