// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCy9UY-g02SKuXffGsLpKExOhBuuG5M_iI",
  authDomain: "crudlibros-b78c4.firebaseapp.com",
  databaseURL: "https://crudlibros-b78c4-default-rtdb.firebaseio.com",
  projectId: "crudlibros-b78c4",
  storageBucket: "crudlibros-b78c4.appspot.com",
  messagingSenderId: "1068959732951",
  appId: "1:1068959732951:web:cdb5e3078fbfc90e0ecc92"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)
export {db}