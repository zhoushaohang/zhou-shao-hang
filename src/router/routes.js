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
  name:'zhou',
  path:'/zhou',
  component: () => import('../views/zhou.vue')
},
{
  name:'deck',
  path:'/deck',
  component: () => import('../views/deck.vue')
},
{
  name:'echarts',
  path:'/echarts',
  component: () => import('../views/echarts.vue')
},
{
  name:'list',
  path:'/list',
  component: () => import('../views/list.vue')
},
{
  name:'class',
  path:'/class',
  component: () => import('../views/class.vue')
},

]

export default routes;