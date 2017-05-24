const firebase = require("firebase");

const config = {
    apiKey: "AIzaSyBfMTg4yZcOzahDU1jPB0oxkMhMQgpT_Sw",
    authDomain: "project3-918a8.firebaseapp.com",
    databaseURL: "https://project3-918a8.firebaseio.com",
    projectId: "project3-918a8",
    storageBucket: "project3-918a8.appspot.com",
    messagingSenderId: "308425811049"
  };


let fireAuth = () => {
    firebase.initializeApp(config);

    //NEED TO ADD MORE HERE!!! 
    //USE THESE DOCS: 
    //https://firebase.google.com/docs/web/setup

};

module.exports = {
    x: x,
    y: y,
    z: z,
}