import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCJZwKANqOy7FDK-03YEJtRVgpIrFESpjc',
  authDomain: 'crwn-db-28c09.firebaseapp.com',
  databaseURL: 'https://crwn-db-28c09.firebaseio.com',
  projectId: 'crwn-db-28c09',
  storageBucket: 'crwn-db-28c09.appspot.com',
  messagingSenderId: '712427811248',
  appId: '1:712427811248:web:283c8e055940aae7fae675',
  measurementId: 'G-XH9SS0BHNS',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
