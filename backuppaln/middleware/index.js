var firebase = require("firebase");

function isLoggedIn(req,res,next){
    if(firebase.auth().currentUser){
        next();
    } else{
        res.redirect('/login');
    }
}

module.exports = {
    isLoggedIn,
  }
