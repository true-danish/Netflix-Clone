// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyCQV-tB4MKCWQsFTQi9EpXcHRRLi9Ao0",
  authDomain: "netflixgpt-57b45.firebaseapp.com",
  projectId: "netflixgpt-57b45",
  storageBucket: "netflixgpt-57b45.appspot.com",
  messagingSenderId: "913413487119",
  appId: "1:913413487119:web:94bdc31723efacfb6fc17a",
  measurementId: "G-N6V9S9N9R3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
