import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/home.vue'),
    meta: { guest: true },
  },
  {
    path: '/configs',
    name: 'Definições',
    component: () => import( '../views/configs.vue'),
    meta: { guest: true },
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import( '../views/Login.vue'),
    meta: { guest: true },
  },
  {
    path: '/uploadImage',
    name: 'UploadImage',
    
    component: () => import( '../components/uploadImage.vue')
  },
  
  {
    path: '/Tarefas',
    name: 'Tarefas',
    
    component: () => import( '../components/Tarefas.vue')
  },
 
  {
    path: '/Dashboard',
    name: 'Dashboard',
    props: {},
    component: () => import( '../views/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
