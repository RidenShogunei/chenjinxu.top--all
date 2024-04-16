import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    component: () => import('../views/mainPage.vue')
  },
  {
    path: '/navigate',
    name: 'navigate',
    component: () => import('../views/navigatePage.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/musicPage.vue')
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('../views/learnPage.vue')
  },
  {
    path: '/animation',
    name: 'animation',
    component: () => import('../views/animationPage.vue')
  },
  {
    path: '/enter',
    name: 'enter',
    component: () => import('../views/game/enterPage.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/game/gamePage.vue')
  },
  {
    path: '/end',
    name: 'end',
    component: () => import('../views/game/endPage.vue')
  },
  {
    path: '/win',
    name: 'win',
    component: () => import('../views/game/winPage.vue')
  },
  {
    path: '/Message',
    name: 'Message',
    component: () => import('../views/diaryPage.vue')
  },
  {
    path: '/crazy',
    name: 'crazy',
    component: () => import('../views/crazy/crazyPage.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Blog/blogPage.vue')
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('../views/personal/passwordPage.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/personal/personalPage.vue'),
    beforeEnter: (to, from, next) => {
      // 检查用户是否是从密码输入页面过来的
      if (from.path === '/password') {
        next();
      } else {
        // 否则，重定向到密码输入页面
        next('/password');
      }
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
