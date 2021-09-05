import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyBCJuiMY2NLZlyN-9AMstrldU3l8RvobgU',
    authDomain: 'bjarki-1ed5b.firebaseapp.com',
    projectId: 'bjarki-1ed5b',
    storageBucket: 'bjarki-1ed5b.appspot.com',
    messagingSenderId: '1065985041449',
    appId: '1:1065985041449:web:896fe3542668c628862838',
    measurementId: 'G-L5LC0ZVNN9',
}

firebase.initializeApp(firebaseConfig)

export { firebase }
