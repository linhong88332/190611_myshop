/*
  路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        footShow:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        footShow:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        footShow:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        footShow:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'',
      redirect:'/msite'
    }

  ]

})