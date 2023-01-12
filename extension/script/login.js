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

//check if user is authenticated
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    location.href = "../popup.html";     
  }
});

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (b) => {
  b.preventDefault();
});

//Get Elements
const txtEmail = document.getElementById("username");
const txtPassword = document.getElementById("passwd");
const btnSignIn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

//Add login event
btnSignIn.addEventListener("click", function() {
  //Get email and password
  const email = txtEmail.value; 
  const password = txtPassword.value;
  const auth = firebase.auth();
  //Sign In
  
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    if (error) {
      loginMessage.innerText = error.message;
    }
  });
});

//reset password
document.getElementById("cr-ac").addEventListener("click", function() {
  chrome.tabs.create({url: chrome.extension.getURL('../Html/forgot-password.html')});
})