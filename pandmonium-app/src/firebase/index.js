import FirebaseApp from 'firebase/app';


// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjKebyqD3OWdU35HqBdFByrV7icBcsWCY",
    authDomain: "pan-d-monium-app.firebaseapp.com",
    databaseURL: "https://pan-d-monium-app.firebaseio.com",
    projectId: "pan-d-monium-app",
    storageBucket: "",
    messagingSenderId: "888100298652",
    appId: "1:888100298652:web:c51990f0e859f374327259"
  };

  class Firebase {
    constructor() {
      FirebaseApp.initializeApp(firebaseConfig);
    }
  };

  export default Firebase;

// Firebase Auth

//Firebase Storage