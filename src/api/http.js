// import { Request } from "../utils/request";

// //1. 获取首页数据列表
// export function getIndexList() {
//   return Request.get('/index/index')
// }

// //2. 分类页 Category
// // 全部分类数据接口
// export function GetChannelDataApi(params) {
//   return Request({
//     url: '/api/catalog/index',
//     method: 'get',
//     params
//   })
// }

// // 3.根据关键字搜索接口
// export function GetSearchData(params) {
//   return Request.get('/goods/list', {
//     params
//   })
// }


// //4.登陆
// export function GoLogin(params) {
//   return Request({
//     url: '/auth/loginByWeb',
//     method: 'post',
//     data: params
//   })
// }

// //5.根据id查询对应数据接口
// export function getDetailData(params) {
//   return Request.get('/goods/detail', {
//     params
//   })
// }