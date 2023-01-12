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
// Initialize Firestore
const db = firebase.firestore();

// Get elements
const logoutBtn = document.getElementById("logout");
const audio = document.getElementById("audio");
let timeRemaining = document.getElementById("remaining_articles");
var email;
let remTime; 

// "Remaing time" counter
audio.addEventListener("playing", function() {
    if (audio.currentTime === 0) {
        getEmail();
        db.collection('timeLeft').where("email", "==", email).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                window.getTime = function() {
                    remTime = doc.data().timeLeft;
                }
                getTime();
                db.collection('timeLeft').doc(email).update({
                    timeLeft: remTime - audio.duration/60
                })
            })
        });    
    }
    else {
        console.log("already playing");
    }
    
});     

//Start processing text
startBtn.addEventListener("click", function() {
    getEmail();
    db.collection('timeLeft').where("email", "==", email).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            remTime = doc.data().timeLeft;
            if (remTime <= 0) {
                document.getElementById("fail").innerText = "You don't have any time left. Buy some more time to keep listening to articles.";
            }
            else {
                chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
                    var activeTab = tabs[0];
                    chrome.tabs.sendMessage(activeTab.id, {from: "startProcessing"});
                    loader.style.display = "block";
                    startBtn.style.display = "none";
                });
            }
        })
    })
});  
    

//Add redirect event
logoutBtn.addEventListener("click", function() {
    firebase.auth().signOut().catch(function(error) {
        console.log(error.message);
    }) 
})
// Redirect if user is logged out
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        location.href = "./Html/login.html";
    }
    else {
        window.getEmail = function() {
            email = user.email;
        }
        // Getting user's remaing time
        getEmail();
        db.collection('timeLeft').where("email", "==", email).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                timeRemaining.innerText = Math.round(doc.data().timeLeft * 1e2) / 1e2 + " minutes";
            })
        });     
    }
});