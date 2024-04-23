import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Distribution from "@/layouts/distribution/Distribution.vue";
import Drafts from "@/views/DistributionView/Drafts/Drafts.vue";
import Planned from "@/views/DistributionView/Planned/Planned.vue";
import Sent from "@/views/DistributionView/Sent/Sent.vue";
import EditDistribution from "@/layouts/EditDistribution/EditDistribution.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/drafts'
  },
  {
    path: '/',
    component: Distribution,

    children: [
      {
        path: '/drafts',
        component: Drafts,
      },
      {
        path: '/planned',
        component: Planned,
      },
      {
        path: '/sent',
        component: Sent,
      }
    ]
  },
  {
    path: '/edit-distribution',
    component: EditDistribution
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
