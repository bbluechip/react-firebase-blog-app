import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyAR-vKBnOjTPc0AB0UE8LZMKgQA0AlK3U8",
  authDomain: "fireblog-64823.firebaseapp.com",
  databaseURL: "https://fireblog-64823-default-rtdb.firebaseio.com",
  projectId: "fireblog-64823",
  storageBucket: "fireblog-64823.appspot.com",
  messagingSenderId: "532754869505",
  appId: "1:532754869505:web:2f1deece31c0a309cdbf00",
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
