import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBqLZKzi9X-8KNWyEe7tdD0hSBilCJH5zg",
  authDomain: "instagram-reels-clone-a2bc2.firebaseapp.com",
  databaseURL: "https://instagram-reels-clone-a2bc2.firebaseio.com",
  projectId: "instagram-reels-clone-a2bc2",
  storageBucket: "instagram-reels-clone-a2bc2.appspot.com",
  messagingSenderId: "428425591374",
  appId: "1:428425591374:web:dc12460bd5ba630a64e11f",
  measurementId: "G-45E2X88WNQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;