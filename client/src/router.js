import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Auth/Login.vue'
import SignUp from './views/Auth/SignUp.vue'
import firebase from 'firebase'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"*",
      redirect:"/login"
    },
    {
      path:"/",
      redirect:"/login"
    },
    {
      path:"/login",
      name:'Login',
      component:Login
    },
    {
      path:"/signup",
      name: "Signup",
      component: SignUp
    },
    {
      path:"/home",
      name:"home",
      component:Dashboard,
      meta:{
        requiresAuth:true
      }
    }
  ]
});

router.beforeEach(
  function(to, from, next){
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record=> record.meta.requiresAuth);
    if(requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    else next();
  }
);

export default router;
