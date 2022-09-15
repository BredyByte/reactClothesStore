import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation= {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    }catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, passwlord) => {
  if(!email || !passwlord) return;
  return await createUserWithEmailAndPassword(auth, email, passwlord);
}

export const signInAuthUserWithEmailAndPassword = async (email, passwlord) => {
  if(!email || !passwlord) return;
  return await signInWithEmailAndPassword(auth, email, passwlord);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
