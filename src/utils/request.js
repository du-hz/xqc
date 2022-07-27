import axios from "axios";
import { Toast } from "vant";

// 是否显示重新登录
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: "/api",
  // 超时
  timeout: 10000,
});

// request拦截器
// service.interceptors.request.use((config) => {
//   // 设置 token
//   config.headers["Authorization"] = store.state.token; // 让每个请求携带自定义token 请根据实际情况自行修改
//   return config;
// });

// 添加请求拦截器
service.interceptors.request.use((config) => {
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

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    console.log(8888, res.data);
    if (res.data.code === 200) {
      return Promise.resolve(res.data);
    } else if (res.data.code === 401) {
      Toast.fail("请登录后再操作");
    } else {
      Toast(res.data.msg);
      return Promise.reject(res.data);
    }
  },
  (error) => {
    console.log(error);
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Toast.fail(message);
    return Promise.reject(error);
  }
);

export default service;

