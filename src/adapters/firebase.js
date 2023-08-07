// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";




// apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_ID,
  // measurementId: process.env.MEASUREMENT_ID

const firebaseConfig = {
  apiKey: "AIzaSyDd2UDG8VoBWJBTfIMy71YBdrW2Fy-iJBY",
  authDomain: "jumia-871c3.firebaseapp.com",
  projectId: "jumia-871c3",
  storageBucket: "jumia-871c3.appspot.com",
  messagingSenderId: "130282456974",
  appId: "1:130282456974:web:8877305f1661f849f746df",
  measurementId: "G-ZW2LVV9HRV"
  
  
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;