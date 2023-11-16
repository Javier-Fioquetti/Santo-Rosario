import { createRouter, createWebHashHistory } from 'vue-router'
import HistoriaRosarioView from '../views/HistoriaRosarioView.vue'
import ComoRezarView from '../views/ComoRezarView.vue'
import DolorososView from '../views/DolorososView.vue'
import GloriososView from '../views/GloriososView.vue'
import GozososView from '../views/GozososView.vue'
import LuminososView from '../views/LuminososView.vue'


const routes = [
  {
    path: '/historia',
    name: 'historia',
    component: HistoriaRosarioView
  },
  {
    path: '/comoRezar',
    name: 'comoRezar',
    component: ComoRezarView
  },
  {
    path: '/dolorosos',
    name: 'dolorosos',
    component: DolorososView
  },
  {
    path: '/gloriosos',
    name: 'gloriosos',
    component: GloriososView
  },
  {
    path: '/gozosos',
    name: 'gozosos',
    component: GozososView
  },
  {
    path: '/luminosos',
    name: 'luminosos',
    component: LuminososView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
