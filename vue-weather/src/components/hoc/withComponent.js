import axios from 'axios'
import Vue from 'vue'

export default (component) => (url) => {
  return Vue.component('CommonComponent', {
    data () {
      return {
        lists: []
      }
    },
    async created () {
      const { data } = await axios.get(url)
      this.lists = data
      console.log(this.lists)
    },
    render (createEl) { // Document.createElement
      return createEl(component, {
        props: {
          lists: this.lists
        }
      })
    }
  })
}

// new Vue({})
// Vue.component('name', {})
