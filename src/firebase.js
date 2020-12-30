import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDi6X6KmFGJi7P5qmlFbnbqHmMjqcldkS8',
	authDomain: 'linkedin-clone-721b8.firebaseapp.com',
	projectId: 'linkedin-clone-721b8',
	storageBucket: 'linkedin-clone-721b8.appspot.com',
	messagingSenderId: '1068978733952',
	appId: '1:1068978733952:web:8deddea891ce35528f3765',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
