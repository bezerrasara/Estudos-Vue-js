import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/notifications',
    name: 'notifications',
    
    component: () => import( '../components/notifications.vue')
  },

  {
    path: '/Fazendo',
    name: 'Fazendo',
    
    component: () => import( '../components/Fazendo.vue')
  },
  {
    path: '/Tarefas',
    name: 'Tarefas',
    
    component: () => import( '../components/Tarefas.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    
    component: () => import( '../views/chat.vue')
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
