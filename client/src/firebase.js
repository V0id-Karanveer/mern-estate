// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-98122.firebaseapp.com",
  projectId: "mern-estate-98122",
  storageBucket: "mern-estate-98122.appspot.com",
  messagingSenderId: "66479352601",
  appId: "1:66479352601:web:15ca406a4302fbcc65f388"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);