// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Q0Egai2HELUcz3__e4fzyCkx_RRYF_o",
  authDomain: "react-cf940.firebaseapp.com",
  databaseURL: "https://react-cf940-default-rtdb.firebaseio.com",
  projectId: "react-cf940",
  storageBucket: "react-cf940.appspot.com",
  messagingSenderId: "1067010378262",
  appId: "1:1067010378262:web:2a0b09b80debfc86498337",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
