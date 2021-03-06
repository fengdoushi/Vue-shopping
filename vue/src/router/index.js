import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'
import Category from 'pages/category/Category'
import ShoppingCart from 'pages/shoppingCart/ShoppingCart'
import My from 'pages/my/My'
import Details from 'pages/details/Details'
import Login from 'pages/user/Login'
import Address from 'pages/user/address'
import AddressEdit from 'pages/user/AddressEdit'
import Collection from 'pages/user/Collection'
import MyOrder from 'pages/user/MyOrder'
import City from 'pages/city/City'
import ShoppingPayMent from 'pages/shoppingCart/components/ShoppingPayMent'
import Evaluate from 'pages/user/Evaluate'
import Aevaluated from 'pages/user/Aevaluated'
import Rate from 'pages/user/Rate'
import Browse from 'pages/browse/Browse'
import store from '../store'
Vue.use(Router)

const router = new Router({
  // mode : 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'Home', component: Home, children: [{ path: '/city', component: City ,name:'City'}, { path: 'details', component: Details ,name:'Details'}] },
    { path: '/category', name: 'Category', component: Category, children: [{ path: 'details', component: Details,name:'Details' }] },
    { path: '/shoppingCart', name: 'ShoppingCart', component: ShoppingCart },
    { path: '/user/login', name: 'Login', component: Login }, // 登入
    { path: '/user/address', name: 'Address', component: Address }, // 地址
    { path: '/user/addressEdit', name: 'AddressEdit', component: AddressEdit }, // 新增和编辑地址
    { path: '/user/collection', name: 'Collection', component: Collection, children: [{ path: 'details', component: Details,name:'Details' }] }, // 我的收藏
    { path: '/my', name: 'My', component: My, children: [{ path: '/my/order', component: MyOrder,name:'MyOrder' },{ path: 'evaluate', component: Evaluate,name:'Evaluate',children:[{path: 'rate', component: Rate,name:'Rate'},{path:'aevaluated', component: Aevaluated,name:'Aevaluated'}] }, { path: '/my/browse', component: Browse, name:'Browse', children: [{ path: 'details', component: Details,name:'Details' }] }] }, // 我的收藏
    { path: '/shoppingPayMent', name: 'ShoppingPayMent', component: ShoppingPayMent },
    { path: '*', redirect: '/home' }
  ]
})

router.beforeEach((to,from,next) => {
  let active

  if (to.path === '/category') {
      active = 1
    } else if (to.path === '/shoppingCart') {
      active = 2
    } else if (to.path === '/my') {
      active = 3
    } else if(to.path ==='/home'){
      active = 0
    }
  store.commit('ACTIVE',active)
  next()
})
export default router
