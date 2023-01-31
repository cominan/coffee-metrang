// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNS_rAjMyaozf8WCZFy8z_2XeDQCk3KXI",
    authDomain: "coffee-9e290.firebaseapp.com",
    projectId: "coffee-9e290",
    storageBucket: "coffee-9e290.appspot.com",
    messagingSenderId: "604714327107",
    appId: "1:604714327107:web:331b8422f741a98088c8f6",
    measurementId: "G-VRYMY0NJMJ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth()
const db = firebase.firestore()
export { auth, db };
export default firebase