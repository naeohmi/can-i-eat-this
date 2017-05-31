const firebase = require("firebase");

//ANONYMOUS SIGN IN OPTION
//FROM: https://firebase.google.com/docs/auth/web/anonymous-auth

let anonSignIn = () => {

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      // ...
    } else {
      // User is signed out.
      // ...
    }
    // ...
  });

  var credential = firebase.auth.EmailAuthProvider.credential(email, password);


  auth.currentUser.link(credential).then(function(user) {
    console.log("Anonymous account successfully upgraded", user);
  }, function(error) {
    console.log("Error upgrading anonymous account", error);
  });

};

module.exports = anonSignIn;
