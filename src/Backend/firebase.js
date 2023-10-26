// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALqdiUTUAHmwMlAR652YZBtDy7RtxTxj4",
    authDomain: "jugaad-71c15.firebaseapp.com",
    projectId: "jugaad-71c15",
    storageBucket: "jugaad-71c15.appspot.com",
    messagingSenderId: "821060086941",
    appId: "1:821060086941:web:3dcf44977466e23d05f874",
    measurementId: "G-4Y66YBXESP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

// export const auth = 