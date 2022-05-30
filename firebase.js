import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCmPjUWJVze394gkExi1QCSSTFKD9lkmEo",
    authDomain: "donbook-95bf6.firebaseapp.com",
    projectId: "donbook-95bf6",
    storageBucket: "donbook-95bf6.appspot.com",
    messagingSenderId: "84582703670",
    appId: "1:84582703670:web:f396f4e9e511ab7d74ae97"
  };

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

export {db}