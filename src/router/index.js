import Vue from 'vue'
import VueRouter from 'vue-router'
import Open from '../views/Open.vue'

Vue.use(VueRouter)

const routes = [
  //test
    {
    path: '/',
    name: 'draw',
    component: () => import(/* webpackChunkName: "about" */ '../components/Canvas.vue')
  },
//
  {
    path: '/x',
    name: 'Open',
    component: Open,
  },
  // {
  //   path: '/big-button',
  //   name: 'BigButton',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/BigButton.vue')
  // },
  // {
  //   path: '/canvas',
  //   name: 'Canvas',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Canvas.vue')
  // },
  {
    path: '/collection',
    name: 'Collection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Collection.vue')
  },
  {
    path: '/end',
    name: 'End',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/End.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
