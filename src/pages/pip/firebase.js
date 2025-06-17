// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb10CF1Whu9AZDmayh8Q3Gv1pceAeugJI",
  authDomain: "pip-your-personal-planner.firebaseapp.com",
  projectId: "pip-your-personal-planner",
  storageBucket: "pip-your-personal-planner.firebasestorage.app",
  messagingSenderId: "977944462186",
  appId: "1:977944462186:web:3f1acb2ba2d810f7949b13",
  measurementId: "G-HF9X28SQX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };