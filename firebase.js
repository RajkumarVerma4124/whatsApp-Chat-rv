import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyASqswku9pVFelmUgZ-p-6j5vkQsY1oHC4",
    authDomain: "whatsapp-chat-rv.firebaseapp.com",
    projectId: "whatsapp-chat-rv",
    storageBucket: "whatsapp-chat-rv.appspot.com",
    messagingSenderId: "872545903717",
    appId: "1:872545903717:web:76039054c41ba83bb8528c",
    measurementId: "G-P3T845YJTV"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }