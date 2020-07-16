import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDKbY3oP8NQEJ3MXcroR50KR0nk7XTDN3E",
    authDomain: "chat-60175.firebaseapp.com",
    databaseURL: "https://chat-60175.firebaseio.com",
    projectId: "chat-60175",
    storageBucket: "chat-60175.appspot.com",
    messagingSenderId: "816028394455",
    appId: "1:816028394455:web:541e2ebeb24faa83836192"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();