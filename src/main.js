import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import './registerServiceWorker'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//style
import './assets/style/aplication.scss'
//bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate';
import Notifications from 'vue-notification'
import JQuery from 'jquery';


Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(Notifications)
Vue.use(JQuery)


router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
  	next('/notFound');
  } else {
  	next();
  }
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
