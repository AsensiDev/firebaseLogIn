// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoDKZ5LYf7aSWYKoCXknWZmwuj80yE4Eo",
  authDomain: "cursosapp-c0086.firebaseapp.com",
  projectId: "cursosapp-c0086",
  storageBucket: "cursosapp-c0086.appspot.com",
  messagingSenderId: "579594737626",
  appId: "1:579594737626:web:c91492069e9d4e38d452e3"
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)
export default appFirebase