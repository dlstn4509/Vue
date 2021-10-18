<template>
  <section class="wrapper view-wrapper">
    <h3 class="title">도서 상세 내용</h3>
    <InfoTxt :title="title" :content="title" :styled="styled" />
    <InfoTxt :title="title" :content="writer" :styled="styled" />
    <InfoTxt :title="title" :content="date" :styled="styled" />
    <InfoTxt :title="title" :content="sale" :styled="styled" />
    <InfoTxt :title="title" :content="content" :styled="styled" />
    <InfoImg :title="title" :content="cover" :styled="styled" v-show="cover" />
    <div v-if="true">
      <InfoImg :title="title" :content="content" :styled="styled" />
    </div>
    <div v-else>
      <InfoTxt :title="title" :content="content" :styled="styled" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ViewCp",
  data() {
    return {
      styled: { padding: "1em" },
    };
  },
};
</script>

<style lang="scss" scoped></style>
