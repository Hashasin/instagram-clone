// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCnE7QTUlNMbdFz0fgk7mn1ejlhh3wdBaw",
    authDomain: "instagram-clone-react-6de19.firebaseapp.com",
    projectId: "instagram-clone-react-6de19",
    storageBucket: "instagram-clone-react-6de19.appspot.com",
    messagingSenderId: "825777929950",
    appId: "1:825777929950:web:e020023996a825e9d5cc4f",
    measurementId: "G-D3DLMM7DK4"
});

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};




//   export default firebaseConfig ;