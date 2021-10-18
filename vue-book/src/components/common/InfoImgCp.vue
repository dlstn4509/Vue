<template>
  <div class="info-wrap" :style="style">
    <div class="title">{{ data.title }}</div>
    <div class="content">
      <div v-if="data.content">
        <img :src="data.content" :alt="data.title" class="img" />
      </div>
      <div v-if="data.fileName">
        <a :href="data.filePath">{{ data.fileName }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import mixinInfo from "../mixins/mixInfo";
export default {
  name: "InfoImgCp",
  mixins: [mixinInfo],
};
</script>

<style lang="scss" scoped>
.info-wrap {
  @include flex;
  .title {
    color: $primary-color;
    width: 20%;
  }
  .content {
    color: $dark-color;
    width: 80%;
    .img {
      max-width: 120px;
    }
  }
}
</style>
