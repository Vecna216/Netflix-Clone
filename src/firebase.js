import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firestore/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSD4Nzr8-PcEdcpXDsdp_IXudyx5KcN_k",
  authDomain: "netflix-clone-f520b.firebaseapp.com",
  projectId: "netflix-clone-f520b",
  storageBucket: "netflix-clone-f520b.firebasestorage.app",
  messagingSenderId: "523133838369",
  appId: "1:523133838369:web:24f0cc9bc7e99b83e4ef60",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
