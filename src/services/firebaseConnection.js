
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDAaEafua8o5VeYpAhUTKZprDdWK9mCP_c",
  authDomain: "webchamados-5c5ef.firebaseapp.com",
  projectId: "webchamados-5c5ef",
  storageBucket: "webchamados-5c5ef.appspot.com",
  messagingSenderId: "179761857019",
  appId: "1:179761857019:web:ebd79e7e1df1acdcb50b5e",
  measurementId: "G-75X9JSKB0X"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };