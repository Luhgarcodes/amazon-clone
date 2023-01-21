// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";
// import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDPjEvqFenDmi-SBa6q6TXLWftRD7CF070",
    authDomain: "clone-63bd2.firebaseapp.com",
    projectId: "clone-63bd2",
    storageBucket: "clone-63bd2.appspot.com",
    messagingSenderId: "483802874173",
    appId: "1:483802874173:web:4c9cdbcf660afaae204554",
    measurementId: "G-Z6P4D460X8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);


export { db, auth };