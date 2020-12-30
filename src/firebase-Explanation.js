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
/* This line of code connects everything */
const db = firebaseApp.firestore();
/* get the db, go to the firebase we initialized, & get firestore */
/* Now inside db we have access to a variable */
const auth = firebase.auth();
/* Get the authentication, we are gonna have loggin support */
/* Thats what give us access to authentication */

export { db, auth };
/* I need these different variables outside of different parts  */
/* db, auth */
