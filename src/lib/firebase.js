//Initialize firebase configurations for login/signup authentication and storage facilities

import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBfmLbgHQ_0Fmt9pWB5oPb7OWEIGVMoYK0",
    authDomain: "test-9696d.firebaseapp.com",
    projectId: "test-9696d",
    storageBucket: "test-9696d.appspot.com",
    messagingSenderId: "362138856706",
    appId: "1:362138856706:web:a36b54e37594c59cbb261b",
    measurementId: "G-2CKBWE65VN"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const database = firebase.database();
  const provider = new firebase.auth.GoogleAuthProvider();
  const providerGit = new firebase.auth.GithubAuthProvider();
  //const providerEmail = new firebase.auth.createUserWithEmailAndPassword();
  const providerMicrosoft = new firebase.auth.OAuthProvider('microsoft.com');
  const storage = firebase.storage();
  
  export { auth, database, provider, providerGit, providerMicrosoft, storage };
  export default db;