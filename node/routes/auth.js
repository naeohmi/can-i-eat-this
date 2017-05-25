const firebase = require("firebase");

let userAuth = () => {
    const config = {
        //my unique firebase config keys
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

    //add click event to login
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

    //USER OBSERVER
    //(good cause observer ensures Auth object not in intermediate state)
    firebase.auth().onAuthStateChanged((user) => {
    //check if user is logged in or not
        if (user) {
            //USER SIGNED IN! yay :)
            // console.log(user); //if user logged in 
            btnLogout.classList.remove('hide'); //if the user is logged in, display the log out button

            //grab the user data
            let displayName = user.displayName;
            let email = user.email;
            let emailVerified = user.emailVerified;
            let isAnonymous = user.isAnonymous;
            let uid = user.uid; //might need to use user.getToken instead if we add this to the backend server db
            let providerData = user.providerData;

        } else {
            //USER OUTTA THERE
            console.log('not logged in'); //not user logged in
            btnLogout.classList.add('hide'); //dont show logout if no user is logged in
        }
    });
};

module.exports = userAuth;