const routes = [

{
  name:'login',
  path:'/',
  component: () => import('../views/login.vue')
},
{
  name:'hoem',
  path:'/hoem',
  component :() => import('../views/home.vue')
},
{
  name:'jianjie',
  path:'/jianjie',
  component: () => import('../views/jianjie.vue')
},
{
  name:'deong',
  path:'/deong',
  component: () => import('../views/deong.vue')
},
{
  name:'zhou',
  path:'/zhou',
  component: () => import('../views/zhou.vue')
},
{
  name:'deck',
  path:'/deck',
  component: () => import('../views/deck.vue')
},

]

export default routes;