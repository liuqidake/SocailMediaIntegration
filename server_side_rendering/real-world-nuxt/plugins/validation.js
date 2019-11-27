import firebase from 'firebase'

export default async ({app})=>{
  app.router.beforeEach(
    function(to, from, next){
      const currentUser = firebase.auth().currentUser;
      const requiresAuth = to.matched.some(record=> record.meta.requiresAuth);
      if(requiresAuth && !currentUser) next('/login');
      else if (!requiresAuth && currentUser) next('/');
      else next();
    }
  )
}
