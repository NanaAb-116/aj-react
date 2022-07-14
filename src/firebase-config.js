import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCkb22Tc_tPHfooQ1T1Ps0xGTmTiOHgKeE',
  authDomain: 'new-practice-project-fe14d.firebaseapp.com',
  projectId: 'new-practice-project-fe14d',
  storageBucket: 'new-practice-project-fe14d.appspot.com',
  messagingSenderId: '258582592492',
  appId: '1:258582592492:web:29c7a4ec6301103e939ec9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize service
export const db = getFirestore(app);
