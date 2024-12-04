// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLZt1cicoU8O5Umu8P8pVTeEhLjYpKeW4",
  authDomain: "assignment-10-56bb8.firebaseapp.com",
  projectId: "assignment-10-56bb8",
  storageBucket: "assignment-10-56bb8.firebasestorage.app",
  messagingSenderId: "998861807623",
  appId: "1:998861807623:web:93919be7567ca4dbbbcaa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth