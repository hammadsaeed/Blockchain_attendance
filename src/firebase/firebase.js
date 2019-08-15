import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyBEAQAz1U-LHBrTnwC1iirdHq4_dtj1NEc",
  authDomain: "presence-unmc.firebaseapp.com",
  databaseURL: "https://presence-unmc.firebaseio.com",
  projectId:"presence-unmc",
  storageBucket: 'presence-unmc.appspot.com',
  messagingSenderId: "194613385208"
};

const devConfig = {
    apiKey: "AIzaSyBEAQAz1U-LHBrTnwC1iirdHq4_dtj1NEc",
    authDomain: "presence-unmc.firebaseapp.com",
    databaseURL: "https://presence-unmc.firebaseio.com",
    projectId:"presence-unmc",
    storageBucket: 'presence-unmc.appspot.com',
    messagingSenderId: "194613385208"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
