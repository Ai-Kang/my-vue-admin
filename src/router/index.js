import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:"/",
      redirect:"/home",
      children: [
        {
          path:"home",
          name:'home',
          component: () => import('../views/home/Index.vue'),

        }
      ]
    }
  ]
})

export default router
