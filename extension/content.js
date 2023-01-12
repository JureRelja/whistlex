// page url
let url = window.location.toString();

//Audio
const audio = new Audio();
audio.volume = 0.5;

//cloud functions API
const api_base = new URL("https://us-central1-whistlex.cloudfunctions.net/WhistleX");
let api_url = api_base.search = "?url=" + url;
let api = api_base.toString();
//calling cloud functions API
const Http = new XMLHttpRequest();
Http.open("POST", api, true);
Http.setRequestHeader("Content-type", "application/json")
let file_name;
let a = 0;

/*Firestore
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
db.settings({ timestampsInSnapshots: true });
*/


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.from === "startProcessing") {
    console.log("YES")
    Http.send();
  }
});
//getting the name of the file
Http.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    file_name = Http.response;
    let file_url = "https://storage.googleapis.com/whistlex-tts/" + file_name
    console.log(file_url)
    audio.src = file_url;
    chrome.runtime.sendMessage({from:"contentScript", message:file_url});
  }
  else if(this.status != 200) {
    chrome.runtime.sendMessage({from:"failed"});
  }
}
// Playing and pausing audio
let i = 0;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.message === "play") {
    if (i % 2 === 0) {
      audio.play();
      i++;
    }
    else if (audio.currentTime === audio.duration) {
      audio.play();
    }
    else {
      audio.pause();
      i++;
    }
  }
  else if (message.message === "change i") {
    i++;
  }
  else if (message.message === "opened") {
    let currentTime = audio.currentTime;
    if (audio.duration > 0 && !audio.paused) {
      console.log("playing")
      chrome.runtime.sendMessage({playing: "true", currentTime: currentTime, src:audio.src})
      chrome.runtime.sendMessage({volume: audio.volume});
    }
    else { 
      if (audio.src) {
        console.log("not playing")
        chrome.runtime.sendMessage({playing: "false", currentTime: currentTime, src:audio.src})
        chrome.runtime.sendMessage({volume: audio.volume});
      }
      else {
        chrome.runtime.sendMessage({display: "yes"})
      }
    }
  }
  else if (message.from === "time skip") {
    audio.currentTime = message.message;
    
  }
  else if (message.speed) {
    console.log(message.speed)
    audio.playbackRate = message.speed;
  }
  else if (message.volume) {
    console.log(message.volume);
    audio.volume = message.volume;
    
  }
});


