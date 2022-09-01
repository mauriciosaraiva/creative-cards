import { createRouter, createWebHistory } from 'vue-router'
// import AppHome from '@/views/AppHome.vue'
// import Category from '@/views/Category.vue'
// import Create from '@/views/Create.vue'
// import Admin from '@/views/Admin.vue'
// import NotFound from '@/views/NotFound.vue'

const AppHome = () => import(/* webpackChunkName: "AppHome" */ '@/views/AppHome.vue'); 
const Category = () => import(/* webpackChunkName: "Category" */ '@/views/Category.vue'); 
const Create = () => import(/* webpackChunkName: "Create" */ '@/views/Create.vue'); 
const Admin = () => import(/* webpackChunkName: "Admin" */ '@/views/Admin.vue'); 
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue');


const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: Category
  },
  {
    path: '/create/:id/:page',
    name: 'Create',
    component: Create
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/:pathName(.*)',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

