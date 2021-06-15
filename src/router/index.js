import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      // beforeEnter:(to,from,next)=>{
      //   if(to.name == 'HelloWorld'){
      //     console.log(to)
      //   }
      // }
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    }
  ]
})

// router.beforeEach((to,from,next)=>{
//   if(to.name == 'HelloWorld'){
//     console.log(to)
//     next()
//   }
// })
export default router
