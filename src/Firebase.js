import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNDyfU70vPjAaCCXO9aGRTnmvqNGW3kgM",
  authDomain: "auth-428c0.firebaseapp.com",
  projectId: "auth-428c0",
  storageBucket: "auth-428c0.appspot.com",
  messagingSenderId: "464813260546",
  appId: "1:464813260546:web:87e52fb3c87cdf56000c1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      // const email = result.user.email;
      // const photo = result.user.photoURL;

      localStorage.setItem("name", name);
      // localStorage.setItem('email', email);
      // localStorage.setItem('photo', photo);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
