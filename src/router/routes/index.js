export default [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'about',
      component: ()=>import ('../../components/about/about')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import ('../../components/home/home')
    },
    {
      path: '/new',
      name: 'new',
      component: ()=>import ('../../components/new/new')
    }
  ]