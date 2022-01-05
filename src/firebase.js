import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDa6r3_Hkg81ggot6vY4izJHbBW0VXaMlc",
  authDomain: "linkedin-clone-b4c76.firebaseapp.com",
  projectId: "linkedin-clone-b4c76",
  storageBucket: "linkedin-clone-b4c76.appspot.com",
  messagingSenderId: "622343209837",
  appId: "1:622343209837:web:ef11573cdc66cbb7891064",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
