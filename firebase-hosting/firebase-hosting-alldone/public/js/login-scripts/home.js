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
    document.getElementById("profile-img").style.display = "block";
    document.getElementById("log-in").style.display = "none";
  }
  else {
    document.getElementById("profile-img").style.display = "none";
    document.getElementById("log-in").style.display = "block";
    res();
    function res() {
      setInterval(() => {
        document.getElementById("screen-min-li").style.display = "none"
        document.getElementById("screen-min-li1").style.display = "none"
      }, 100);
    }
  }
});

//logout
let logoutBtn = document.getElementById("logout")
logoutBtn.addEventListener("click", function() {
    firebase.auth().signOut().catch(function(error) {
        console.log(error.message);
    }) 
})
//logout
document.getElementById("screen-min-li1").addEventListener("click", function() {
  firebase.auth().signOut().catch(function(error) {
    console.log(error.message);
  }) 
})



document.getElementById('profile-photo').addEventListener('click', function() {
    var x = document.getElementById('menu-container');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }	
})