<template>
  <div class="title-bar">
    <b-jumbotron class="jumbotron">
      <template #header>Vue Library Management System</template>
      <template #lead>
        Vue.js / Vuex / Vue-router를 활용한 도서 관리 시스템
      </template>
      <hr class="my-4" />
      <p class="content">
        Node.js / Express / MySQL을 활용한 도서 관리 시스템을 확인 하시려면
        아래의 링크를 클릭하세요.
      </p>
      <b-button variant="primary" :href="expressLink">
        Express 도서 관리 시스템 바로가기
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
const { VUE_APP_EXPRESS } = process.env;
export default {
  name: "TitleBar",
  data() {
    return {
      expressLink: VUE_APP_EXPRESS,
    };
  },
};
</script>

<style lang="scss" scoped>
.title-bar {
  background-color: $grey-color;
  color: $light-color;
  padding: 2em;
  .jumbotron {
    width: 90%;
    margin: auto;
    .display-3 {
      font-size: 2.5rem;
      margin-bottom: 0.25em;
      @include MD {
        font-size: 2rem;
      }
      @include SM {
        font-size: 1.5rem;
      }
    }
    p {
      line-height: 1.25;
      &.lead {
        @include MD {
          font-size: 1.125rem;
        }
        @include SM {
          font-size: 0.875rem;
        }
      }
      &.content {
        @include MD {
          display: none;
        }
      }
    }
  }
}
</style>
