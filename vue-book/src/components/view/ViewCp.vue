<template>
  <section class="wrapper view-wrapper">
    <h3 class="title">도서 상세 내용</h3>
    <InfoTxtCp :data="title" :styled="styled" />
    <InfoTxtCp :data="writer" :styled="styled" />
    <InfoTxtCp :data="date" :styled="styled" />
    <InfoTxtCp :data="status" :styled="styled" />
    <InfoTxtCp :data="content" :styled="styled" />
    <InfoImgCp :data="cover" :styled="styled" v-show="cover" />
    <InfoImgCp :data="upfile" :styled="styled" v-show="upfile" />
    <div class="bt-wrap">
      <button class="btn btn-success bt-back" @click="goBack">리스트</button>
    </div>
  </section>
</template>

<script>
const { VUE_APP_EXPRESS } = process.env;
import { mapGetters } from "vuex";
import InfoTxtCp from "../common/InfoTxtCp.vue";
import InfoImgCp from "../common/InfoImgCp.vue";

export default {
  name: "ViewCp",
  components: { InfoTxtCp, InfoImgCp },
  data() {
    return {
      styled: { padding: "1em" },
      idx: null,
    };
  },
  computed: {
    ...mapGetters(["GET_BOOK"]),
    title() {
      return { title: "제목", content: this.GET_BOOK.title };
    },
    writer() {
      return { title: "작성자", content: this.GET_BOOK.writer };
    },
    date() {
      return { title: "발행일", content: this.GET_BOOK.createdAt };
    },
    status() {
      return { title: "상태", content: this.GET_BOOK.status };
    },
    content() {
      return { title: "내용", content: this.GET_BOOK.content };
    },
    cover() {
      if (this.GET_BOOK.cover) {
        return {
          title: "커버이미지",
          content: VUE_APP_EXPRESS + this.GET_BOOK.cover,
        };
      } else {
        return false;
      }
    },
    upfile() {
      if (this.GET_BOOK.upfile) {
        return {
          title: "첨부 파일",
          content: this.GET_BOOK.isImg
            ? VUE_APP_EXPRESS + this.GET_BOOK.upfile
            : null,
          fileName: this.GET_BOOK.upfile ? this.GET_BOOK.oriname2 : null,
          filePath: this.GET_BOOK.upfile
            ? VUE_APP_EXPRESS + "/book/download/" + this.GET_BOOK.id2
            : null,
        };
      } else {
        return false;
      }
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.idx = this.$route.params.idx;
    this.$store.dispatch("ACT_BOOK", this.idx);
  },
};
</script>

<style lang="scss" scoped>
.view-wrapper {
  .title {
    margin-bottom: 1em;
    border-bottom: 1px solid $success-color;
    padding-bottom: 0.5em;
    &:before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 10px;
      background-color: $accent-color;
      margin-right: 0.5em;
    }
  }
  .bt-wrap {
    margin: 2em 0;
    text-align: center;
  }
}
</style>
