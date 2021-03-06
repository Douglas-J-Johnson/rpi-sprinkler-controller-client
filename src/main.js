import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';

import config from './config';

import Home from './components/Home.vue';
import Devices from './components/Devices.vue';
import Schedules from './components/Schedules.vue';
import AuthHandler from './components/AuthHandler.vue';
import AuthDefault from './components/AuthDefault.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/devices', component: Devices },
    { path: '/schedules', component: Schedules },
    { path: config.github.accessCodeCallback, component: AuthHandler },
    { path: config.github.defaultCallback, component: AuthDefault }
  ]
});

export const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
