// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLk20-LOUMTeNYRuYULum8bg2wGJnfAuo",
  authDomain: "netflix-gpt-bfcb6.firebaseapp.com",
  projectId: "netflix-gpt-bfcb6",
  storageBucket: "netflix-gpt-bfcb6.appspot.com",
  messagingSenderId: "991471350059",
  appId: "1:991471350059:web:074a922147a5237633956e",
  measurementId: "G-T0G5SPWK1P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
