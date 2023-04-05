// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA8LujVNddc3GOA-SPLEi6h8i0hDzTS1M",
  authDomain: "tiktok---jornada-6860d.firebaseapp.com",
  projectId: "tiktok---jornada-6860d",
  storageBucket: "tiktok---jornada-6860d.appspot.com",
  messagingSenderId: "534608137331",
  appId: "1:534608137331:web:e4c90fdaaadcf7dccbee06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;