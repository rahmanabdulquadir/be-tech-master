// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB0stVITVCuKEVKa3-pIotpvq4x3F-UqY",
  authDomain: "be-tech-master.firebaseapp.com",
  projectId: "be-tech-master",
  storageBucket: "be-tech-master.appspot.com",
  messagingSenderId: "639718692822",
  appId: "1:639718692822:web:f9e10d22180960d423f677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;