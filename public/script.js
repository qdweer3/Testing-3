// Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// User Authentication
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
    });

// User Roles
// Example of checking user role
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
            // Check if user is an admin
            if (idTokenResult.claims.admin) {
                console.log('User is an admin');
            } else {
                console.log('User is not an admin');
            }
        });
    }
});

// Message Timestamps
function displayMessage(message) {
    const div = document.createElement('div');
    const timestamp = new Date().toLocaleTimeString(); // Add timestamp
    div.textContent = `${timestamp} - ${message}`; // Append timestamp to message
    chatbox.appendChild(div);
}

// Send Message Function
function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();
    if (message !== '') {
        // Send message to server or database
        displayMessage(message);
        messageInput.value = ''; // Clear input field after sending message
    }
}

// Remaining code...
