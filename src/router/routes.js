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

]

export default routes;