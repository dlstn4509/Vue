<template>
  <div class="tbl-wrap">
    <!-- table -->
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>저자</th>
          <th>요약설명</th>
          <th>표지</th>
          <th>등록일</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        <TrCp v-for="book in books" :key="book.idx" :book="book" />
      </tbody>
    </table>
  </div>
</template>

<script>
import TrCp from "./TrCp.vue";

export default {
  name: "TableCp",
  components: { TrCp },
  props: ["books"],
};
</script>

<style lang="scss" scoped>
.tbl-wrap {
  .table {
    text-align: center;
    th {
      background-color: $primary-color;
      color: $light-color;
      padding: 0.75em 0;
      @include MD {
        &:nth-child(4),
        &:nth-child(5) {
          display: none;
        }
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
