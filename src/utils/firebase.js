// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-deploy-65b9d.firebaseapp.com",
  projectId: "blog-deploy-65b9d",
  storageBucket: "blog-deploy-65b9d.firebasestorage.app",
  messagingSenderId: "127268024807",
  appId: "1:127268024807:web:381294c1956a6c939f8d42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);