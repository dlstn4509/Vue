<template>
  <tr>
    <td>{{ book.idx }}</td>
    <td @click="goView">{{ book.title }}</td>
    <td @click="goView">{{ book.writer }}</td>
    <td @click="goView">{{ book.content }}</td>
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
  methods: {
    goView() {
      this.$router.push("/view/" + this.book.idx);
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  td {
    &:nth-child(2),
    &:nth-child(4) {
      text-align: left;
    }
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      cursor: pointer;
    }
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
