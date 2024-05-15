// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOYCmsb3TVC2NMnvMxzEsEoIvP2EY6Mjg",
  authDomain: "video-flatform.firebaseapp.com",
  projectId: "video-flatform",
  storageBucket: "video-flatform.appspot.com",
  messagingSenderId: "798059480798",
  appId: "1:798059480798:web:78ae7dd3bb1456f70ca44f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig