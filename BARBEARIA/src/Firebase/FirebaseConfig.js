import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBpD4NNFcw1bbJi2rMGy2pMMMQdxgywMjQ",
    authDomain: "barbearia-oliveira-700b0.firebaseapp.com",
    projectId: "barbearia-oliveira-700b0",
    storageBucket: "barbearia-oliveira-700b0.firebasestorage.app",
    messagingSenderId: "641155618768",
    appId: "1:641155618768:web:075b936703fc6036334bd5",
    measurementId: "G-3JHFJPMQHG"
  };


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }