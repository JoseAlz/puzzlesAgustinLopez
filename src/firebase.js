
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage" 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY || "AIzaSyBAITPh91HZZSQqsF_F-jl1Zbaw4rPe_3M",
  authDomain: "puzzles-65bfd.firebaseapp.com",
  projectId: "puzzles-65bfd",
  storageBucket: "puzzles-65bfd.appspot.com",
  messagingSenderId: "857128624868",
  appId: "1:857128624868:web:68ed6f73cb888ad4f602f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth= getAuth(app)
const storage= getStorage(app)

export default db
export {auth}
export {storage}
