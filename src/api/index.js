/*
  包含n个接口请求函数的函数，调用ajax模块
   函数的返回值：promise对象
 */
import ajax from './ajax'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAdress = (geohash) => ajax('/position/'+geohash)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodList = () => ajax("/index_category")

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShopList = (latitude,longitude) => ajax("/shops",{latitude,longitude})

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShops = (keyword,geohash) => ajax("/search_shops",{keyword,geohash})

// [5、获取一次性验证码](#5获取一次性验证码)<br/>
export const reqOnceKey = () => ajax("/captcha")

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqUserLogin = (name,pwd,captcha) => ajax("/login_pwd",{name,pwd,captcha},'POST')

// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSms = (phone) => ajax("/sendcode",{phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqUserLogin = (phone,code) => ajax("/login_sms",{phone,code},'POST')

// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax("/userinfo")

// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax("/logout")







