import Vue from 'vue'
import Router from 'vue-router'
import singleLogin from '@/components/single-login'
import singlePage from '@/components/single-page'
import page01 from '@/components/childComponents/page01'
import page02 from '@/components/childComponents/page02'
import page03 from '@/components/childComponents/page03'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'single-login',
      component: singleLogin
    },
    {
      path: '/single-page',
      name: 'single-page',
      component: singlePage,
      children:[
        {
          path:'page01',
          name:'page01',
          component:page01
        },
        {
          path:'page02',
          name:'page02',
          component:page02
        },
        {
          path:'page03',
          name:'page03',
          component:page03
        },
      ],
    }
  ]
})
