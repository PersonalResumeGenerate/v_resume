import Vue from 'vue';
import Router from 'vue-router';
import pageDefault from '@/components/resume/pageDefault';
import pageSecond from '@/components/resume/pageSecond';
import pageThird from '@/components/resume/pageThird';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: pageDefault,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/two',
      component: pageSecond
    }, {
      path: '/three',
      component: pageThird
    }
  ]
});
