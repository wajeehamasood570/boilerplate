// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF_UfPCQXeIZwBudB1DxbH6aNBTW0Bt2I",
  authDomain: "react-ecommerce-4508d.firebaseapp.com",
  databaseURL: "https://react-ecommerce-4508d-default-rtdb.firebaseio.com",
  projectId: "react-ecommerce-4508d",
  storageBucket: "react-ecommerce-4508d.appspot.com",
  messagingSenderId: "865875433440",
  appId: "1:865875433440:web:4e3fbcdbb7e447108c7d85",
  measurementId: "G-ZVR1NK75DQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);