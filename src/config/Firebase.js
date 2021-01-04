import firebase from "firebase";

const CONFIG = {
  apiKey: "AIzaSyAf8CAul40-ci5ZqVzWbc-DlSqeN3sEyIM",
  authDomain: "twitter-clone-c1b85.firebaseapp.com",
  projectId: "twitter-clone-c1b85",
  storageBucket: "twitter-clone-c1b85.appspot.com",
  messagingSenderId: "987719332990",
  appId: "1:987719332990:web:2fde4fb30d70bcf0bb542f",
  measurementId: "G-T347VWPPJM",
};

const fire = firebase.initializeApp(CONFIG);

export default fire;
