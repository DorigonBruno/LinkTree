import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhp17BpFgEUMrPPAhM0FnETdy0LsoCo5s",
  authDomain: "brunolinks-5a4cf.firebaseapp.com",
  projectId: "brunolinks-5a4cf",
  storageBucket: "brunolinks-5a4cf.firebasestorage.app",
  messagingSenderId: "452566896162",
  appId: "1:452566896162:web:bfb1a71d08843686bb447b",
  measurementId: "G-4DYPEMEF1W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
