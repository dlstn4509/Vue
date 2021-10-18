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
    // /uploads/211015/211015_b672e361-3d8b-4849-9657-f4db60779ed6.jpg",
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
    @include MD {
      &:nth-child(4),
      &:nth-child(5) {
        display: none;
      }
      @include SM {
        &:nth-child(6) {
          display: none;
        }
      }
      @include XS {
        &:nth-child(3) {
          display: none;
        }
      }
    }
  }
}
</style>
