
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyBm0b8tpkse2vGoRs3WqGX8LeXdK09kpR8",
  authDomain: "crispyhuts-4e312.firebaseapp.com",
  databaseURL: "https://crispyhuts-4e312-default-rtdb.firebaseio.com",
  projectId: "crispyhuts-4e312",
  storageBucket: "crispyhuts-4e312.appspot.com",
  messagingSenderId: "675976270533",
  appId: "1:675976270533:web:4623f1275e5027bf3796ac"
};



const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app,firestore ,storage}; 
