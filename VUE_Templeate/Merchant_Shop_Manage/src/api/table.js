// import request from '@/utils/request'

// export function getList(params) {
//   console.log(request({
//     url: '/table/list',
//     method: 'get',
//     params
//   }))
// }
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
Vue.use(axios)
Vue.use(qs)

export const getLists = []

export function getList(params) {
  return axios.post('http://192.168.0.127/ucc/table/list', qs.stringify(params))
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
      console.log('错误')
    })
}
