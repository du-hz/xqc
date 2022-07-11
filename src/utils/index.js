// 导入axios
import axios from 'axios';
// 使用自定义配置新建一个axios 实例，对axios 做一些基础配置
const instance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8001/',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  //请求之前执行该函数， 一般在该处设置token
  let token = localStorage.getItem("token");
  if (token) {
    config.headers["token"] = token
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

//响应拦截器
instance.interceptors.response.use(response => {
  //1.非200响应
  //2.token过期
  //3.异地登陆
  //4.非对象加密的解密
  return response.data
})

export default instance