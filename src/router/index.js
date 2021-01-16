import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import Loader from '../components/Loader.vue'
import Error from '../components/Error.vue'

const Home = defineAsyncComponent({
  loader: () => import('../views/Home.vue'),
  delay: 200,
  loadingComponent: Loader,
  errorComponent: Error
})
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/:pathMatch(.*)",
    name: Error,
    component: Error,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
