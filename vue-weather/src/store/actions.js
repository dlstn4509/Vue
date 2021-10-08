// Store 데이터 상태 변화, 할 거 많음
// 내가 하는거 (깃 푸쉬)

import apiCoords from '../api/api-coords'

const ACT_COORDS = async ({ commit }, v) => {
  try {
    const { coords } = await apiCoords()
    commit('MUT_COORDS', { let: coords.latitude, lon: coords.longitude })
  } catch (err) {
    console.log(err)
  }
}

const ACT_DAILY = () => {

}

const ACT_DAYS = () => {

}
export default { ACT_COORDS, ACT_DAILY, ACT_DAYS }
