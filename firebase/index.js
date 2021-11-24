import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA05eYn7_3OgKwqmTA2VVj5Qwt3Z8QVDlo",
  authDomain: "chatkitty-40fb4.firebaseapp.com",
  projectId: "chatkitty-40fb4",
  storageBucket: "chatkitty-40fb4.appspot.com",
  messagingSenderId: "794416789365",
  appId: "1:794416789365:web:13ed0aa704258e497c853c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };