var firebaseConfig = {
    apiKey: "AIzaSyDrX2-A67eB9_53VpfsxjZdaujSTcop2Ms",
    authDomain: "whistlex-test.firebaseapp.com",
    databaseURL: "https://whistlex-test.firebaseio.com",
    projectId: "whistlex-test",
    storageBucket: "whistlex-test.appspot.com",
    messagingSenderId: "1001410107276",
    appId: "1:1001410107276:web:22c39a4ff0e1f0860aa8a9"
  };

//Get purchase buttons
const purchase1 = document.getElementById("purchaseBtn1");
const purchase2 = document.getElementById("purchaseBtn2");
const purchase3 = document.getElementById("purchaseBtn3");
let currentUser;

//Redirect user to log in or purchase page
purchase1.addEventListener("click", function() {
  getUser();
  if(currentUser) {
    purchase1.setAttribute("href", "../pricing.html")
  }
})
purchase2.addEventListener("click", function() {
  getUser();
  if(currentUser) {
    purchase2.setAttribute("href", "../pricing.html")
  }
})
purchase3.addEventListener("click", function() {
  getUser();
  if(currentUser) {
    purchase3.setAttribute("href", "../pricing.html")
  }
})


//check if user is authenticated
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.getUser = function() {
      currentUser = user;
    }
  }
});

