import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAYZ3mA9Q2EM8RJsateGFYHVGH4ivU_JQ4",
  authDomain: "disneyplus-8fdca.firebaseapp.com",
  projectId: "disneyplus-8fdca",
  storageBucket: "disneyplus-8fdca.appspot.com",
  messagingSenderId: "795220739569",
  appId: "1:795220739569:web:d0a9fefe8b30ab0c10b050",
  measurementId: "G-9BWCVCNQ1M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
