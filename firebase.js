import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAppTTOkSy-9Xf34cWql_hHfg37xVLxbxA",
  authDomain: "rezeptbuch-b225f.firebaseapp.com",
  projectId: "rezeptbuch-b225f",
  storageBucket: "rezeptbuch-b225f.firebasestorage.app",
  messagingSenderId: "719465655805",
  appId: "1:719465655805:web:cbdbb8d7344e9dd46bbd94",
  measurementId: "G-7WK63MG5T1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
