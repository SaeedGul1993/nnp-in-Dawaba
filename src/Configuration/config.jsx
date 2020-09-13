import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAk1eogqQNuYIsE10yAmVFIaEqO_UX3Yl4",
    authDomain: "nnp-solutions-official-app.firebaseapp.com",
    databaseURL: "https://nnp-solutions-official-app.firebaseio.com",
    projectId: "nnp-solutions-official-app",
    storageBucket: "nnp-solutions-official-app.appspot.com",
    messagingSenderId: "392903639058",
    appId: "1:392903639058:web:686c5eff112412feb658cb",
    measurementId: "G-TM0WJQSJW3"
};

const database = firebase.initializeApp(firebaseConfig);

export default database;