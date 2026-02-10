import { auth, db } from "../db/fireBase.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useState, useEffect, useContext, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("userData");
  });

  const [loading, setLoading] = useState(true);

  async function signup(email, address, username, password) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const currentUser = userCredential.user;
    const newUserIds = {
      uid: currentUser.uid,
      email: email,
      address: address,
      username: username,
      password: password,
      cart: [],
      purchaseHistory: [],
      createdAt: new Date().toISOString(),
    };
    await setDoc(doc(db, "users", currentUser.uid), newUserIds);
    setUser(newUserIds);
    setIsAuthenticated(true);
  }

  async function signin(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("userData");
    setUser(null);
    setIsAuthenticated(false);
  };

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        // Agregamos un log para ver qué está pasando
        const email = error.customData?.email;
        console.log("Email en conflicto detectado:", email);

        if (!email) {
          alert(
            "No se pudo recuperar el email de la cuenta de Google. Intenta iniciar sesión manualmente.",
          );
          return;
        }

        const pendingCredential = GoogleAuthProvider.credentialFromError(error);
        const methods = await fetchSignInMethodsForEmail(auth, email);

        if (methods.includes("password")) {
          const password = prompt(
            "Ya tienes una cuenta con este email. Ingresa tu contraseña:",
          );
          if (password) {
            const result = await signInWithEmailAndPassword(
              auth,
              email,
              password,
            );
            await linkWithCredential(result.user, pendingCredential);
            return result.user;
          }
        }
      }
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(docRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setUser({ ...userData, uid: currentUser.uid });
          setIsAuthenticated(true);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("userData");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        user,
        isAuthenticated,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
