import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import('../components/HomePage.vue')
const Carousel = () => import('../components/Carousel.vue')
const PieChart = () => import('../components/PieChart.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/chart',
      name: 'PieChart',
      component: PieChart
    },
  ]
})

export default router
