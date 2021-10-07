module.exports = { // 바벨을 써야 함으로 module.exports 씀
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/_common.scss";',
        // 경로 중 @ 로 시작하는건 src 폴더
      },
    },
  },
};
