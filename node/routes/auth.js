const firebase = require("firebase");

let userAuth = () => {
    const config = {
        apiKey: "AIzaSyBfMTg4yZcOzahDU1jPB0oxkMhMQgpT_Sw",
        authDomain: "project3-918a8.firebaseapp.com",
        databaseURL: "https://project3-918a8.firebaseio.com",
        projectId: "project3-918a8",
        storageBucket: "project3-918a8.appspot.com",
        messagingSenderId: "308425811049"
    };
    firebase.initializeApp(config);

    //get all the elements from the DOM
    const txtEmail = document.getElementById('txtEmail'); 
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');


    //add click event

    btnLogin.addEventListener('click', e => {
        //get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //user signs in
        auth.signInWithEmailAndPassword(email, pass); //returns promise
        promise.catch(e => console.log(e.message)); //catch error
    });

    //add click event for signup
    btnSignUp.addEventListener('click', e => {
        //get email and password
        const email = txtEmail.value; //NEED TO ADD CHECK FOR REAL EMAIL HERE!
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //user signs in
        auth.createUserWithEmailAndPassword(email, pass); //returns promise
        promise //promise only fires off once so cant just use .then because auth state changes

            .catch(e => console.log(e.message)); //catch error
    });

    //add click event to log out when logout button clicked (default set to hidden)
    btnLogout.addEventListener('click', e => {
        //sign out the currently authenticated user
        firebase.auth().signOut();

    })


    firebase.auth().onAuthStateChanged(firebaseUser => {
    //check if user is logged in or not
        if (firebaseUser) {
            console.log(firebaseUser); //if user logged in 
            btnLogout.classList.remove('hide'); //if the user is logged in, display the log out button

        } else {
            console.log('not logged in'); //not user logged in
            btnLogout.classList.add('hide'); //dont show logout if no user is logged in
        }
    });
};

module.exports = userAuth;