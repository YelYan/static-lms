import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVZ3eujbKDCDaqMY4ganV41O0QdOJnVy0",
  authDomain: "skilltech-cc631.firebaseapp.com",
  projectId: "skilltech-cc631",
  storageBucket: "skilltech-cc631.firebasestorage.app",
  messagingSenderId: "49002496528",
  appId: "1:49002496528:web:dbe8384230c5aa0f724095",
  measurementId: "G-SG5SDV8GJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app , auth }