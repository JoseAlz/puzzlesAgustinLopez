// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAITPh91HZZSQqsF_F-jl1Zbaw4rPe_3M",
  authDomain: "puzzles-65bfd.firebaseapp.com",
  projectId: "puzzles-65bfd",
  storageBucket: "puzzles-65bfd.appspot.com",
  messagingSenderId: "857128624868",
  appId: "1:857128624868:web:68ed6f73cb888ad4f602f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export default db