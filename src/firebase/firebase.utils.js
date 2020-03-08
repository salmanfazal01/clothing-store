import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2ANRmLaYCQEJGUcfwyeQiWWVzPUxXifg",
    authDomain: "crwn-db-9a821.firebaseapp.com",
    databaseURL: "https://crwn-db-9a821.firebaseio.com",
    projectId: "crwn-db-9a821",
    storageBucket: "crwn-db-9a821.appspot.com",
    messagingSenderId: "1038305149222",
    appId: "1:1038305149222:web:fa860ed5b98447182701e7",
    measurementId: "G-LL7B1C07LC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;