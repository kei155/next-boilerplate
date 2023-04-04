// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPhoneNumber } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiPTNE0nG_BuFhJQTxRA1Wp3Yhk9DuF0k',
  authDomain: 'everything-i-need-337be.firebaseapp.com',
  projectId: 'everything-i-need-337be',
  storageBucket: 'everything-i-need-337be.appspot.com',
  messagingSenderId: '470868045474',
  appId: '1:470868045474:web:bf48e5a81bc28c9eaff1fb',
  measurementId: 'G-20HMRB7RCN'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function useFirebase() {
  return {
    app,
    auth,
    signInWithPhoneNumber,
  }
}
