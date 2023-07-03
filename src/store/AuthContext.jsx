import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext({
  user: "",
  errors: "",
  createUser: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);

  const createUser = (email, password) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return createUserWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        setErrors((prev) => {
          const err = {
            code: error.code,
            message: error.message,
          };
          return err;
        });
      });
  };

  const cleanServerErrors = () => {
    setErrors(null);
  };

  const login = (email, password) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        setErrors((prev) => {
          const err = {
            code: error.code,
            message: error.message,
          };
          return err;
        });
      });
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      return setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    createUser,
    login,
    logout,
    user: user,
    serverErrors: errors,
    cleanServerErrors,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
