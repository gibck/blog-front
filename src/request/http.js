/** 接口调用工具*/
import axios from 'axios' // 引用axios

// 配置API接口地址
var root = 'http://localhost:5050/blog'

//var root = 'http://www.ckevin.cn:8080/blog'
//
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = 'https://www.baidu.com';}
// else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = 'https://www.ceshi.com';
// }
// else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = 'https://www.production.com';
// }

axios.defaults.headers.post['content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.timeout = 5000;
axios.interceptors.request.use(
  config => {

    return config;
  }
);

axios.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  error => {
    const {response} = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      //store.commit('changeNetwork', false);
    }
  }
  );

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
/** 参数过滤函数*/
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
/**添加headers,可以动态添加header参数*/
function setHeaders(headers){
  axios.defaults.headers.school_id = headers.school_id;
  axios.defaults.headers.token = headers.token;
}


//其实success与failure这两个参数，传过来的是两个放方法
function apiAxios (method, url,headers, params, success, failure) {
  if (headers){
    headers = filterNull(headers);
    setHeaders(headers)
  }

  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
    .then(function (res) {
      //console.log(res.data.status === "200")
      if (res.data.status === "200") {
        if (success) {
          //使用success(data)方法
          success(res.data)
        }
      } else {
        failure(res.data)
      }
    }).catch(function (err) {
      let res = err.response
      console.log("catch=============="+err)
      if (err) {
        window.alert(err)
      }
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url,headers, params, success, failure) {
    return apiAxios('GET', url,headers, params, success, failure)
  },
  post: function (url,headers, params, success, failure) {
    return apiAxios('POST', url,headers, params, success, failure)
  },
  put: function (url,headers, params, success, failure) {
    return apiAxios('PUT', url,headers, params, success, failure)
  },
  delete: function (url,headers, params, success, failure) {
    return apiAxios('DELETE', url,headers, params, success, failure)
  }
}
