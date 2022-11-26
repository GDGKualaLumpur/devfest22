import { initializeApp } from 'firebase/app';

import { getAuth, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getDatabase, ref, get, onValue } from "firebase/database";

const config = {
  apiKey: "AIzaSyCr2mpyl3Bk_-06f4bgCdntmz_zVzmMPiU",
  authDomain: "devfest-22-d4c32.firebaseapp.com",
  databaseURL: "https://devfest-22-d4c32-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "devfest-22-d4c32",
  storageBucket: "devfest-22-d4c32.appspot.com",
  messagingSenderId: "29335375840",
  appId: "1:29335375840:web:ff9bb9a1a5cea03be8e585"
};
const app = initializeApp(config);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);
export default {
  app,
  auth: {
    signInWithRedirect: (provider) => signInWithRedirect(auth, provider),
    signOut,
    onAuthStateChanged: (cb) => onAuthStateChanged(auth, cb),
  },
  firestore: {
    doc: (path) => doc(firestore, path),
    onSnapshot: (path, cb) => onSnapshot(doc(firestore, path), cb),
  },
  database: {
    get: (path) => get(ref(database, path)).then(snapshot => snapshot.val()),
    once: (path, cb) => onValue(ref(database, path), (snapshot) => {
      cb(snapshot.val())
    }, {
      onlyOnce: true
    }),
    onValue: (path, cb) => onValue(ref(database, path), (snapshot) => {
      cb(snapshot.val())
    }),
  },
}