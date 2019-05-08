import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Main from '@/components/Main'
import Blog from '@/components/Blog'
import About from '@/components/About'
import BlogList from '@/components/BlogList'
import BlogDetail from '@/components/BlogDetail'
import RemoreHome from '@/components/RemoreHome'
import ProgramLife from '@/components/ProgramLife'
import English from '@/components/English'
import Talk from '@/components/Talk'
import ProgramBlogDetail from '@/components/ProgramBlogDetail'


export default new Router({
  routes: [{
      path:'/',
      redirect:'/blog/blogList',
    },
    {
      path:'/blog',
      name:'Blog',
      redirect:'/blog/blogList',
      component: Blog,
      children: [{
        path:'/blog/bloglist',
        component: BlogList
      },{
        path:'/blog/blogDetail',
        component: BlogDetail
      }
      ]
    },
    {
      path: '/main',
      name: 'Main',
      redirect:'/main/program',
      component: Main,
      children: [{
        path:'/main/program',
        component: ProgramLife,
        children:[{
          path:'/main/program/blogDetail',
          component: ProgramBlogDetail
        }]
      },{
        path:'/main/remoreHome',
        component: RemoreHome
      },{
        path:'/main/english',
        component: English
      },{
        path:'/main/talk',
        component: Talk
      }]
    },{
      path: '/about',
      name: 'About',
      component: About,
    }
  ],
  mode:"history"
})
