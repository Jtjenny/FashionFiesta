
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyBh7LGy-h-4kCZ03sfDKbFnWNLMty0Hs8o",
//   authDomain: "nykaa-app-47041.firebaseapp.com",
//   projectId: "nykaa-app-47041",
//   storageBucket: "nykaa-app-47041.appspot.com",
//   messagingSenderId: "242594448023",
//   appId: "1:242594448023:web:7b996333a33cfa01009fd2"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCVQEQw9k8hnC5-poj5NtIcKYrACcMBa6Y",
  authDomain: "fashionfiesta-1fa57.firebaseapp.com",
  projectId: "fashionfiesta-1fa57",
  storageBucket: "fashionfiesta-1fa57.appspot.com",
  messagingSenderId: "735126506713",
  appId: "1:735126506713:web:23a5651db1925b710502c8",
  measurementId: "G-SSYJK085GZ"
};

  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();

  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

  export {auth,googleAuthProvider}