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
const db = firebase.firestore();

const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

//Get Elements
const txtName = document.getElementById("full-name");
const txtEmail = document.getElementById("email");
const txtPassword = document.getElementById("password");
const btnSignup = document.getElementById("btn-1");
const registerMessage = document.getElementById("registerMessage");
let userEmail;

//Add login event
btnSignup.addEventListener("click", function() {
  //Get email and password
  const email = txtEmail.value; 
  const password = txtPassword.value;
  const name = txtName.value;
  const auth = firebase.auth();
  
  //Sign Up
  auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    if (error) {
      registerMessage.innerText = error.message;
    }
  }).then(function(user) {
    setTimeout(() => {
      if (user) {
        getEmail();
        db.collection('timeLeft').doc(userEmail).set({
          fullName: name,
          email: userEmail,  
          timeLeft: 30,
        });
        setTimeout(() => {
          location.href = "../pricing.html"; 
        }, 400);
      }
    }, 100);
  })
})

//check if user is authenticated
firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
     window.getEmail = function() {
       userEmail = user.email;
     }
     setTimeout(() => {
      location.href = "../index.html"; 
     }, 500);
   }
});

