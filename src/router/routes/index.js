import home from '../../components/home/home'
import about from '../../components/about/about'

export default [
    {
      path: '*',
      redirect: '/home/all'
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path:'/home/:aid',
          component: ()=>import('../../components/home/home-tab.vue')
        }
      ]
    },
    {
      path: '/new',
      name: 'new',
      component: ()=>import('../../components/new/new')
    },
    {
      path: '/api',
      name: 'api',
      component: ()=>import('../../components/api/api.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: ()=>import('../../components/details/details.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: ()=>import('../../components/users/users.vue')
    }
  ]