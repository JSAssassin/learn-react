import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
const apiKey = import.meta.env.VITE_API_KEY;
const messagingSenderId = import.meta.env.VITE_MESSENGING_SENDER_ID
const firebaseConfig = {
    apiKey,
    authDomain: "react-notes-9f39e.firebaseapp.com",
    projectId: "react-notes-9f39e",
    storageBucket: "react-notes-9f39e.appspot.com",
    messagingSenderId,
    appId: "1:593778496806:web:c2100557d51136a1a99de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, 'notes');
