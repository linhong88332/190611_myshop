/*
  ajax后台通讯模块
 */
import axios from 'axios'

export default function ajax(url='',data={ },type='GET') {
  return new Promise(function (reslove,reject) {
    let promise

    if(type==='GET'){
      let datastr=''
      Object.keys(data),forEach(key => {
        datastr+=key+'='+data[key]+'&'
      })
      if(datastr!==''){
        datastr=datastr.substring(0,datastr.lastIndexOf('&'))
        url=url+'?'+datastr
      }
      //发送get请求
      promise = axios.get(url)
    }elae{
      //发送post请求
      promise = axios.post(url,data)
    }

    promise.then(response=>{
      resolve(response.data)
    })
    .catch(error=>{
      reject(error)
    })
  })
}
