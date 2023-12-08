// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCVQEQw9k8hnC5-poj5NtIcKYrACcMBa6Y",
    authDomain: "fashionfiesta-1fa57.firebaseapp.com",
    projectId: "fashionfiesta-1fa57",
    storageBucket: "fashionfiesta-1fa57.appspot.com",
    messagingSenderId: "735126506713",
    appId: "1:735126506713:web:23a5651db1925b710502c8",
    measurementId: "G-SSYJK085GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app)
export default firebaseAuth;