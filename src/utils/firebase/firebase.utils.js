import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCQerVUb3UKL8ULRacygO8bexlwuCX5vLA",
  authDomain: "clothes-store-react-app.firebaseapp.com",
  projectId: "clothes-store-react-app",
  storageBucket: "clothes-store-react-app.appspot.com",
  messagingSenderId: "737532385938",
  appId: "1:737532385938:web:3832578aa18a315b0c644b"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
}