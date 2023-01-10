import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJzGz9Nnm7sy0-b_thn3syh6ZVBoDNWu4",
  authDomain: "netflix-cdc28.firebaseapp.com",
  projectId: "netflix-cdc28",
  storageBucket: "netflix-cdc28.appspot.com",
  messagingSenderId: "225908886176",
  appId: "1:225908886176:web:fa689e25fb7b920dfad7c5",
  measurementId: "G-WFGFBL8FB9"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
