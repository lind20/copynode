import axios from 'axios'
// 设置axios响应信息的统一格式
axios.interceptors.response.use(res => res.data)

export default function ajax (url, data = {}, method = 'get') {
  let p
  return new Promise((resolve, reject) => {
    if (method === 'get') { // 如果是get请求
      p = axios.get(url, {
        params: data
      })
    } else {
      p = axios.post(url, data)
    }
    p.then(res => {
      resolve(res)
    }).catch((err) => {
      console.log(err)
    })
  })
}
