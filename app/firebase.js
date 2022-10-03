
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk8JnDKtaL1OIHwpz6-3xEHtjstRwKlgo",
  authDomain: "app-firebase-63ce7.firebaseapp.com",
  projectId: "app-firebase-63ce7",
  storageBucket: "app-firebase-63ce7.appspot.com",
  messagingSenderId: "560827972509",
  appId: "1:560827972509:web:3e363ad7d40a5040a78d74",
  measurementId: "G-RQT5T42ZVV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);