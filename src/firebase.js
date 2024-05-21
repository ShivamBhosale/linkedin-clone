// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASeESwKZnnl95lMRnmGDKuFcn3iD3oycg",
    authDomain: "linkedin-clone-55d5a.firebaseapp.com",
    projectId: "linkedin-clone-55d5a",
    storageBucket: "linkedin-clone-55d5a.appspot.com",
    messagingSenderId: "270123273590",
    appId: "1:270123273590:web:ffa31877b69d256b92be57",
    measurementId: "G-ZDVLQJSSBJ"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db, serverTimestamp };
  

//   export { db, auth, serverTimestamp };