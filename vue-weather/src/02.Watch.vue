<template>
  <div>
    <h1>Count: {{ counter }}</h1>
    <button @click="updateCounter">카운트 올리기</button>
    <button @click="getLocation">위치 정보 가져오기</button>
    <h2>{{getLet}} / {{getLon}}</h2>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

import apiCoords from './api/api-coords'

export default {
  name: 'Getters01',
  data () {
    return {
      count: 0,
      lat: '',
      lon: ''
    }
  },
  computed: {
    counter: function () {
      return this.count + ' 입니다.'
    },
    getLet: function () {
      return `[${this.lat}]`
    },
    getLon: function () {
      return `[${this.lon}]`
    }
  },
  methods: {
    updateCounter () {
      this.count++
    },
    async getLocation () {
      try {
        const r = await apiCoords
        // this.lat = coords.latitude
        // this.lon = coords.longitude
        console.log(r)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
