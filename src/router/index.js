import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/resume-view.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/projects-view.vue'),
    props: true
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('../views/testimonials-view.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact-view.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
