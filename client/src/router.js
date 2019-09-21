import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path:'/team',
      name:'team',
      component:Team
    },
    {
      path:'/login',
      name:"login",
      component:Login
    },
    {
      path:'/signup',
      name:"signup",
      component:SignUp
    }
  ]
});
export default router;
