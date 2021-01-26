import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDB0tSWwyX9WDxx14ZJj4hWv8FKE30Nhw",
  authDomain: "react-cart-1.firebaseapp.com",
  projectId: "react-cart-1",
  storageBucket: "react-cart-1.appspot.com",
  messagingSenderId: "84904775835",
  appId: "1:84904775835:web:2ab9ca9ab4e7207e16363e",
  measurementId: "G-90VJCWVBHV",
});

const db = firebaseApp.firestore();

export default db;
