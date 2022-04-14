// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCum5vei4Xy17W6ghlJIEhD79qT1t23RJ4",
    authDomain: "genius-car-services-ef3b9.firebaseapp.com",
    projectId: "genius-car-services-ef3b9",
    storageBucket: "genius-car-services-ef3b9.appspot.com",
    messagingSenderId: "1086894354519",
    appId: "1:1086894354519:web:78915ecb2cf7235d23b312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;