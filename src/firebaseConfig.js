// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getDatabase, ref, set, get } from 'firebase/database'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC07cHTAboB0MMpRO7IkqDPYjuEEwroZ7g',
  authDomain: 'intelliseit-c18aa.firebaseapp.com',
  databaseURL: 'https://intelliseit-c18aa-default-rtdb.firebaseio.com',
  projectId: 'intelliseit-c18aa',
  storageBucket: 'intelliseit-c18aa.appspot.com',
  messagingSenderId: '954660979100',
  appId: '1:954660979100:web:3e16cd1414152dfa6bc859',
  measurementId: 'G-CC2WQCSYDS',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const database = getDatabase(app)

const provider = new GoogleAuthProvider()
export { app, provider, database }
