import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyAs4rLx5G6Tr244pcFkMDWmTHPX5TpikHk",
    authDomain: "budgetngapp.firebaseapp.com",
    projectId: "budgetngapp",
    storageBucket: "budgetngapp.appspot.com",
    messagingSenderId: "713637563778",
    appId: "1:713637563778:web:3520417e5fa028213b939b",
    measurementId: "G-F7CNDB98LP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);