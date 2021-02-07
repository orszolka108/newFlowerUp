import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBUjrrKTgeDM4o845-ov_kPPysTJIAanXs',
  authDomain: 'newflowerup.firebaseapp.com',
  projectId: 'newflowerup',
  storageBucket: 'newflowerup.appspot.com',
  messagingSenderId: '787091338195',
  appId: '1:787091338195:web:789e65075df260cddcf526',
  measurementId: 'G-78RGS69SR6',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const googleAuth = () => {
  return firebase.auth().signInWithPopup(googleProvider)
}
