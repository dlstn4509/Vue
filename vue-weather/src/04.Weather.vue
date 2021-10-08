<template>
  <div>
    <button class="btn btn-primary" @click="getWeather">현재 날씨 가져오기</button>
    <button class="btn btn-danger" @click="clearWeather">날씨 가져오기 중지</button>
  </div>
</template>

<script>
import { apiCoords } from './api/api-coords'
// import apiDaily from './api/api-daily'

export default {
  name: 'Weather04',
  data () {
    return {
      coords: null,
      daily: null,
      interval: null
    }
  },
  watch: {
    coords: async function (v, ov) {
      console.log(v)
    }
  },
  methods: {
    getWeather () {
      this.interval = setInterval(async function () {
        const { coords } = await apiCoords()
        this.coords = { lat: coords.latitude, lon: coords.longitude }
      }.bind(this), 1000)
    },
    clearWeather () {
      clearInterval(this.interval)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
