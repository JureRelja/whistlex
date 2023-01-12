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

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.getEmail = function() {
            userEmail = user.email;
        }
        document.getElementById("profile-img").style.display = "block";
        document.getElementById("log-in").style.display = "none";
    }
    else {
        location.href = "./login.html";   
    }
});


// Basic plan
// Render the PayPal button into #paypal-button-container
paypal.Buttons({
    // Set up the transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '9.99'
                }
            }]
        });
    },

    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer    
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
            //Update user's time left
            getEmail();
            db.collection('timeLeft').where("email", "==", userEmail).get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    window.getTime = function() {
                        remTime = doc.data().timeLeft;
                    }
                    getTime();
                    db.collection('timeLeft').doc(userEmail).update({
                        timeLeft: remTime + 300
                    })
                })
            });
            location.href = "../thank-you.html";  
        });
    }

}).render('#paypal-button-container-basic');
paypal.Buttons({
    style: {
        layout: 'horizontal'
    },
})


// Standard plan
// Render the PayPal button into #paypal-button-container
paypal.Buttons({
    // Set up the transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '16.99'
                }
            }]
        });
    },

    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
            //Update user's time left
            getEmail();
            db.collection('timeLeft').where("email", "==", userEmail).get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    window.getTime = function() {
                        remTime = doc.data().timeLeft;
                    }
                    getTime();
                    db.collection('timeLeft').doc(userEmail).update({
                        timeLeft: remTime + 600
                    })
                })
            });
            location.href = "../thank-you.html";  
        });
    }

}).render('#paypal-button-container-standard');
paypal.Buttons({
    style: {
        layout: 'horizontal'
    },
})


//Pro plan
// Render the PayPal button into #paypal-button-container
paypal.Buttons({
    // Set up the transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '29.99'
                }
            }]
        });
    },

    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
            //Update user's time left
            getEmail();
            db.collection('timeLeft').where("email", "==", userEmail).get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    window.getTime = function() {
                        remTime = doc.data().timeLeft;
                    }
                    getTime();
                    db.collection('timeLeft').doc(userEmail).update({
                        timeLeft: remTime + 1200
                    })
                })
            });
            location.href = "../thank-you.html";  
        });
    }

}).render('#paypal-button-container-pro');
paypal.Buttons({
    style: {
        layout: 'horizontal'
    },
})


