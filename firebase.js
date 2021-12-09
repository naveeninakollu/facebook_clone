
import "firebase/storage";
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyAWeRAL23BorQOfl0WdVYz7WYM6HL1U5d4",
  authDomain: "facebookclone-efc7b.firebaseapp.com",
  projectId: "facebookclone-efc7b",
  storageBucket: "facebookclone-efc7b.appspot.com",
  messagingSenderId: "794885500366",
  appId: "1:794885500366:web:58108d8122d1827a7b8f9f"
};

const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();
const db= app.firestore();
const storage=firebase.storage();
export {db,storage};