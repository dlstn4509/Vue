import axios from 'axios'

const appid = '3c04f92240b9cdfbc2e0280668623b5d'
const url = 'https://api.openweathermap.org/data/2.5/weather'
const params = { units: 'metric', appid }
// const icons = ['https://openweathermap.org/img/wn/', '@2x.png']

const apiDaily = (options) => {
  if (options.id) {
    params.id = options.id
  } else if (options.lat && options.lon) {
    params.lat = options.lat
    params.lon = options.lon
  } else { //
    throw new Error('Error')
  }
  return axios.get(url, { params })
}

export default apiDaily
