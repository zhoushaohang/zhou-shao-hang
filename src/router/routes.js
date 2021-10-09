const routes = [
  {
    name: 'hoem',
    path: '/',
    component: () => import('../views/home.vue'),
    breadcrumbName: '首页',
    meta: {
      label: '首页',
      icon: 'home',
    },
  },
  {
    name:'kiji',
    path:'/kiji',
    component: () =>import('../views/kejifuwu/jiankucixu/kiji.vue')
  },
  {
    name:'jiankucixu',
    path:'/jiankucixu',
    component: () =>import('../views/kejifuwu/jiankucixu/jiankucixu.vue')
  }
]

export default routes;