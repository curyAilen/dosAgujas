import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB-AGY2QIdjSz9krIJTRBMxCZqJfR4sBvs",
  authDomain: "dosagujas2023.firebaseapp.com",
  projectId: "dosagujas2023",
  storageBucket: "dosagujas2023.appspot.com",
  messagingSenderId: "28553930050",
  appId: "1:28553930050:web:c8f35d0a574582977a14db"
};
 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
