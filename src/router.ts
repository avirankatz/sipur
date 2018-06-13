import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Story from './views/Story.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/story',
      name: 'story',
      component: Story,
    },
  ],
});
