import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';
import Posts from '@/views/Posts.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: 'default-layout' },
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
      meta: { layout: 'no-header-layout' },
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: Post,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
});


export default router;
