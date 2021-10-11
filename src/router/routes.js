const routes = [
  {
    name: 'hoem',
    path: '/',
    component: () => import('../views/home.vue')
  },
  {
    name :'kejifuwu',
    path :'/kejifuwu',
    component: () => import('../views/kejifuwu.vue'),
    children:[
      {
        name :'2daizhijianku',
        path :'/2daizhijianku',
        component: function () {
          return  import('../views/kejifuwu/2daizhijianku.vue')
        },
      },
      {
        name :'boozhijianku',
        path :'/boozhijianku',
        component: function () {
          return  import('../views/kejifuwu/boozhijianku.vue')
        }, 
      }
    ]
  }
]

export default routes;