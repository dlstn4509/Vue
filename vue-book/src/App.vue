<template>
  <div class="app-wrapper">
    <Header />
    <TitleBar />
    <transition name="slide" mode="out-in">
      <router-view class="router-view" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/inc/Header.vue";
import Footer from "./components/inc/Footer.vue";
import TitleBar from "./components/inc/TitleBar.vue";

export default {
  name: "App",
  components: { Header, Footer, TitleBar },
};
</script>

<style lang="scss">
.app-wrapper {
  width: 100%;
  overflow: hidden;
  height: 100vh;
  @include flex;
  @include flexCol;
  .router-view {
    flex-grow: 1;
  }
}
</style>
