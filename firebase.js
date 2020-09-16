import firebase from "firebase";
import firebaseApp from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCKXBjPJGc464MHdNuDZRzTKipcZu00myE",
    authDomain: "uberclone-3a81b.firebaseapp.com",
    databaseURL: "https://uberclone-3a81b.firebaseio.com",
    projectId: "uberclone-3a81b",
    storageBucket: "uberclone-3a81b.appspot.com",
    messagingSenderId: "432425336159",
    appId: "1:432425336159:web:6197c28f8be9c6cda50aea",
    measurementId: "G-HRGCLGPY2G"
});

const db=firebaseApp.firestore();

export default db ;
