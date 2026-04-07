import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB3cbEstk2KTJDJN-R7MqnqAUUVw_RmQuY",
    authDomain: "robinson-digital-services.firebaseapp.com",
    databaseURL: "https://robinson-digital-services-default-rtdb.firebaseio.com",
    projectId: "robinson-digital-services",
    storageBucket: "robinson-digital-services.firebasestorage.app",
    messagingSenderId: "146739830936",
    appId: "1:146739830936:web:348c0a4f369d421ea9f0ed",
    measurementId: "G-ZMSLPJE4NG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Now you can use `database` to read/write to realtime database










// Simple form validation (optional)
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    if (!name || !service || !date) {
        alert('Please fill out all fields!');
        e.preventDefault();
    }
});





// Show the "Back to Top" button when the user scrolls down
window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var backToTopButton = document.querySelector('.back-to-top');

    if (scrollPosition > 300) { // Show button after scrolling 300px
        backToTopButton.classList.add('show-back-to-top');
    } else {
        backToTopButton.classList.remove('show-back-to-top');
    }
};

// Scroll to the top when the button is clicked
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});