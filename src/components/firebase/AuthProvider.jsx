import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
// import { auth } from "./firebase.config";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);
  const provider = new GoogleAuthProvider();

  const creatUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const login = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const google = () => {
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        console.log(currentUser);
        setLoading(false);
        setUser(currentUser);
        const userData = {
          name: currentUser.displayName,
          email: currentUser.email,
          image: currentUser.photoURL,
          role: "employee",
        };
        if (currentUser?.displayName) {
          axios
            .post(
              `${import.meta.env.VITE_Localhost}/users/${currentUser.email}`,
              userData
            )
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user]);
  const profile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const authValue = {
    creatUser,
    login,
    user,
    google,
    logOut,
    profile,
    loading,
    setUser,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
