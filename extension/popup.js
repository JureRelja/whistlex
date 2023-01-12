// https://github.com/sampotts/plyr/#options
const player = new Plyr('audio', {
    speed: {selected: 1, options: [0.5, 1, 1.5]}
});

//Loading and starting
let white = document.getElementById("white");
let loader = document.getElementById("loader");
let startBtn = document.getElementById("startBtn");

// See the current time and if the audio is playing
window.player = player;
let audioSource = document.getElementById("audio");
audioSource.muted = true;
window.onload = function() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "opened"}); 
    }); 
    if (audioSource.src) {
    
    }
    else {
        console.log("audio is currently playing")
    }
};

// listen to the messages from the content script
chrome.runtime.onMessage.addListener(function (message) {
    if (message.from === "contentScript") {
        audioSource.src = message.message;
        white.style.display = "none";
        loader.style.display = "none";
        startBtn.style.display = "none";
    }
    else if (message.from === "failed") {
        document.getElementById("fail").innerText = "An error occurred, please reload the page and try again.";
    }
    else if (message.playing === "true") {
        audioSource.src = message.src;
        audioSource.currentTime = message.currentTime + 0.1; 
        player.play();
        startBtn.style.display = "none";
        white.style.display = "none";
    }
    else if (message.playing === "false") {
        audioSource.src = message.src;
        audioSource.currentTime = message.currentTime + 0.1; 
        audioSource.pause();
        startBtn.style.display = "none";
        white.style.display = "none";
    }
    else if (message.ended === "true") {
        audioSource.currentTime = message.currentTime + 0.1;
        audioSource.play();
    }
    else if (message.display === "yes") {
        startBtn.style.display = "block";
        white.style.display = "block";
    }
});


//skip
let skipTimes = document.getElementsByClassName("plyr__progress__container");
for (skipTime of skipTimes) {
    skipTime.addEventListener("click", function() {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {from:"time skip", message:audioSource.currentTime});
        });
    });
};

//know when audio has ended
audioSource.addEventListener("ended", function() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "change i"});
    });
});

//play and pause
let clicks = document.querySelectorAll('[data-plyr="play"]');
let pauses = document.querySelectorAll('[href="#plyr-pause"]');
for (const click of clicks) {
    click.addEventListener('click', function() {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {message: "play"});
        });
    });
}

// change the speed of audio
let speeds = document.querySelectorAll('[data-plyr="speed"]');
for (speed of speeds) {
    speed.addEventListener("click", function() {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var activeTab = tabs[0];
            setTimeout(() => {
            let currentSpeed = player.speed;
            chrome.tabs.sendMessage(activeTab.id, {speed: currentSpeed});
            }, 1);
            
        });
    })
}


//User menu popup
document.getElementById('mini-photo-wrapper').addEventListener('click', function() {
    var x = document.getElementById('menu-container');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }	
})

