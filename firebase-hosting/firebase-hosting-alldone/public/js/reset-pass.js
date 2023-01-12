var firebaseConfig = {
    apiKey: "AIzaSyDrX2-A67eB9_53VpfsxjZdaujSTcop2Ms",
    authDomain: "whistlex-test.firebaseapp.com",
    databaseURL: "https://whistlex-test.firebaseio.com",
    projectId: "whistlex-test",
    storageBucket: "whistlex-test.appspot.com",
    messagingSenderId: "1001410107276",
    appId: "1:1001410107276:web:22c39a4ff0e1f0860aa8a9"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//get elements
const email = document.getElementById("form-email");
const auth = firebase.auth();
const reset = document.getElementById("reset");
const message = document.getElementById("message");

reset.addEventListener("click", function() {
    auth.sendPasswordResetEmail(email.value).then(function() {
        // Email sent.
        message.style.color = "black"
        message.innerText = "Email sent! Check your email inbox to reset password."
        }).catch(function(error) {
        // An error happened.
        message.innerText = error.message;
        });
})