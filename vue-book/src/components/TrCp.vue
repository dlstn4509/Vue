<template>
  <tr>
    <td>{{ book.idx }}</td>
    <td class="text-left">{{ book.title }}</td>
    <td>{{ book.writer }}</td>
    <td>{{ book.content }}</td>
    <td>
      <div v-if="cover">
        <img :src="cover" class="icon-cover" />
      </div>
      <div v-else>&nbsp;</div>
    </td>
    <td>{{ date }}</td>
    <td>{{ book.status }}</td>
  </tr>
</template>

<script>
import moment from "moment";
export default {
  name: "TrCp",
  props: ["book"],
  computed: {
    cover() {
      return this.book.cover
        ? process.env.VUE_APP_EXPRESS + this.book.cover
        : false;
    },
    date() {
      return moment(this.book.createdAt).format("YYYY년 MM월 DD일");
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  td {
    vertical-align: middle;
    .icon-cover {
      max-width: 40px;
      max-height: 40px;
    }
  }
}
</style>
