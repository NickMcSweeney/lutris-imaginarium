import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Contents from '@/components/Contents'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contents',
      name: 'Contents',
      component: Contents
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
