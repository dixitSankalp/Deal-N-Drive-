// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "deal-n-drive-32532.firebaseapp.com",
  projectId: "deal-n-drive-32532",
  storageBucket: "deal-n-drive-32532.firebasestorage.app",
  messagingSenderId: "191929893061",
  appId: "1:191929893061:web:888b65e23d163bf55730ac",
  measurementId: "G-49F65LQGMH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
