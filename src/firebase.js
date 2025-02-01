// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
// Import other services you need
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBkSWo3CxnNkYQLBdc9JcQ5yC6oGCvi6Y",
  authDomain: "atibule-5965b.firebaseapp.com",
  projectId: "atibule-5965b",
  storageBucket: "atibule-5965b.firebasestorage.app",
  messagingSenderId: "1079909815926",
  appId: "1:1079909815926:web:9609d2c414a53b6380b157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get references to Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
