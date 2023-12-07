import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import NavBar from "@/components/NavBar.vue";

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/test',
    name: 'Test',
    component: NavBar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
