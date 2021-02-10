import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const googleAuth = () => {
  return firebase.auth().signInWithPopup(googleProvider)
}
