import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBUVnw9mjO342kuKitAw2kILwyIf-sGrDo",
  authDomain: "petpal-d1947.firebaseapp.com",
  projectId: "petpal-d1947",
  storageBucket: "petpal-d1947.appspot.com",
  messagingSenderId: "336226222311",
  appId: "1:336226222311:web:6573b7bdbf2ea47c252242",
  measurementId: "G-PPEESGWR00"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);