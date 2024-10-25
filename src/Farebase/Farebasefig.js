// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkA0eK6tNARgUkvCCc9_WcFlgP9KZWN40",
  authDomain: "auth-paul-d42a9.firebaseapp.com",
  projectId: "auth-paul-d42a9",
  storageBucket: "auth-paul-d42a9.appspot.com",
  messagingSenderId: "538560382197",
  appId: "1:538560382197:web:8821d95d82181a0f1371bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app