import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../components/Admin'
import TagModeration from '../components/TagModeration'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/admin'
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'tagModeration',
          name: 'tag-moderation',
          component: TagModeration
        }
      ]
    }
  ]
})
