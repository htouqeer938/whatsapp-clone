// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyC-IZWgsffi3bD0WSBPdonNfIv0oeluVQQ",
      authDomain: "whatsapp-9398f.firebaseapp.com",
      projectId: "whatsapp-9398f",
      storageBucket: "whatsapp-9398f.appspot.com",
      messagingSenderId: "850976099467",
      appId: "1:850976099467:web:6a528ebea6f07b027b988e",
      measurementId: "G-1Z81G911X0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);