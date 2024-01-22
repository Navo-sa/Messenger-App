import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC-q2I2cKK_TuFI5gh2wEvNE-vxTdj80K0",
    authDomain: "messenger-app-d04aa.firebaseapp.com",
    projectId: "messenger-app-d04aa",
    storageBucket: "messenger-app-d04aa.appspot.com",
    messagingSenderId: "758313645992",
    appId: "1:758313645992:web:b315134d1eb5f25cfd0f9d",
    measurementId: "G-K143LF1BG5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);