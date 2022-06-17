// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgrXuboOudoasVOrYKYxAMT57MlBHK8Jw",
  authDomain: "galeria-grafica.firebaseapp.com",
  projectId: "galeria-grafica",
  storageBucket: "galeria-grafica.appspot.com",
  messagingSenderId: "497778004364",
  appId: "1:497778004364:web:bf175338142d705d3006a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db