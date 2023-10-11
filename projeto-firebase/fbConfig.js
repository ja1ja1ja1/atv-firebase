// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa_ZHGi0Qk2sl0N-pxycl8JGBIkFCjAlE",
  authDomain: "testecomfirebase-99f64.firebaseapp.com",
  projectId: "testecomfirebase-99f64",
  storageBucket: "testecomfirebase-99f64.appspot.com",
  messagingSenderId: "853807549763",
  appId: "1:853807549763:web:640f4f85c1a084a8cd33f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
window.auth = getAuth(app);

console.log(app)
console.log(auth)