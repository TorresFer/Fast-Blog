import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCX3dtZ-Mo5hx_HxkrHduCCyAtgQpCXPk8",
  authDomain: "fastblog-5d009.firebaseapp.com",
  projectId: "fastblog-5d009",
  storageBucket: "fastblog-5d009.appspot.com",
  messagingSenderId: "1060013220698",
  appId: "1:1060013220698:web:8c2ddf3b7576beadc0c963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }