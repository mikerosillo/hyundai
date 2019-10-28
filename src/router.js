import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Game from './views/Game.vue';
import reset from './views/reset.vue'
import isLoggedMixin from './mixins/authentication.js'
import NotFound from './views/NotFound.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
      meta: {
        header: 0
      }
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
      
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFound
      
    },
  ]
});
