import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4JrZCUo2hJxWqTlgadgn6NdQfBjtYyHM",
  authDomain: "tpa-desktop-c25ac.firebaseapp.com",
  projectId: "tpa-desktop-c25ac",
  storageBucket: "tpa-desktop-c25ac.appspot.com",
  messagingSenderId: "171473141798",
  appId: "1:171473141798:web:21ee830ea6502e9179a6e7",
  measurementId: "G-EXC4YDY2E3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);