import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCbEv-fkDHMqBSnYz8Zs8CxZZ3X2YbRfQ",
  authDomain: "challenge-7eb5d.firebaseapp.com",
  databaseURL: "https://challenge-7eb5d.firebaseio.com",
  projectId: "challenge-7eb5d",
  storageBucket: "challenge-7eb5d.appspot.com",
  messagingSenderId: "761044800673",
  appId: "1:761044800673:web:753d6ee8d3b5fecd308ce0",
  measurementId: "G-4X0WVWR0LT",
};

// initialize app with firebaseConfig
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize real time database
const db = firebaseApp.firestore();
// var handle all the sign in
const auth = firebase.auth();

// export these two things to databse and authentication, use these outside the file
export { db, auth };