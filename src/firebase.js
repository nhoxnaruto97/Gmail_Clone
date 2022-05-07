import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuPLY3zR1NL_EVywY00TdvHSREoHxQjGQ",
  authDomain: "clone-cab31.firebaseapp.com",
  projectId: "clone-cab31",
  storageBucket: "clone-cab31.appspot.com",
  messagingSenderId: "491146796052",
  appId: "1:491146796052:web:dd62f822a03820b3691b01",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
