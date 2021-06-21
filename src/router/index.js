import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Day from '../views/Day.vue'
import Week from '../views/Week.vue'
import Month from '../views/Month.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/day',
    name: 'Day',
    component: Day
  },
  {
    path: '/week',
    name: 'Week',
    component: Week
  },
  {
    path: '/month',
    name: 'Month',
    component: Month
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
