const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', redirect: '/beranda' },
      { path: 'beranda', component: () => import('pages/Beranda.vue'), name: 'beranda' },
      { path: 'transaksi', component: () => import('pages/Transaksi.vue'), name: 'transaksi' },
      { path: 'laporan', component: () => import('pages/Laporan.vue'), name: 'laporan' },
      { path: 'profil', component: () => import('pages/Profil.vue'), name: 'profil' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
