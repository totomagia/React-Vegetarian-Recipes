// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const {REACT_APP_API_KEY_FIREBASE} = process.env
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY_FIREBASE,
  authDomain: "vegetarian-recipes-2c1f3.firebaseapp.com",
  projectId: "vegetarian-recipes-2c1f3",
  storageBucket: "vegetarian-recipes-2c1f3.appspot.com",
  messagingSenderId: "761985981709",
  appId: "1:761985981709:web:7a00cda360a4246ce9a444",
  measurementId: "G-H9D44NE2ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);