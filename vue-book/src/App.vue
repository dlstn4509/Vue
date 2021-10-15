<template>
  <div class="app-wrapper">
    <Header />
    <TitleBar />
    <transition name="slide" mode="out-in">
      <router-view class="router-view" />
    </transition>
    <Footer />
    <Loading :active="GET_LOADING" />
  </div>
</template>

<script>
import Header from "./components/inc/Header.vue";
import Footer from "./components/inc/Footer.vue";
import TitleBar from "./components/inc/TitleBar.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { Header, Footer, TitleBar, Loading },
  computed: {
    ...mapGetters(["GET_LOADING"]),
  },
};
</script>

<style lang="scss">
.app-wrapper {
  width: 100%;
  min-height: 100vh;
  @include flex;
  @include flexCol;
  .router-view {
    flex-grow: 1;
  }
}
</style>
