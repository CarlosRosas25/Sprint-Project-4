import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUm0olww86F-myZRbgvR0XWVltedffXSE",
  authDomain: "cr-project-25.firebaseapp.com",
  projectId: "cr-project-25",
  storageBucket: "cr-project-25.appspot.com",
  messagingSenderId: "494466625023",
  appId: "1:494466625023:web:ca320a236fc3dc97bccbca",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const tweetsCollectionRef = collection(db, "tweets");

export { db, tweetsCollectionRef };
export default app;
