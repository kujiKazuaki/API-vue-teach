import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/GoogleMapAPI",
    name: "GoogleMapAPI",
    component: () => import("@/viewsAPI/Google/GoogleMapAPI.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
