import { defineRouter } from '#q-app/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes.js'
import { Notify } from 'quasar';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach((to) => {
    // Ambil token dari local storage
    const token = localStorage.getItem('mywallet-token');

    // Jika tokennya gak sama atau gak ada, maka kembalikan ke halaman login
    if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
      
      Notify.create({
        type: 'negative',
        message: 'Kamu belum login, silakan login dulu yaaa!',
        position: 'bottom',
        timeout: 3000,
      });

      return { name: 'login' };
    }

    // Jika tokennya ada, maka pindahkan ke halaman beranda
    if (to.name === 'login' && token) {
      return { name: 'beranda' };
    }

    return true;
  });

  return Router
})
