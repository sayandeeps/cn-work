import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCrZc_mKz1DVOn4j1E0MTMp6l2UZS_n2h0",
  authDomain: "cn-work.firebaseapp.com",
  projectId: "cn-work",
  storageBucket: "cn-work.appspot.com",
  messagingSenderId: "528708717323",
  appId: "1:528708717323:web:304af20e2e642a4c6af00e",
  measurementId: "G-J9LCE3ZP1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app};