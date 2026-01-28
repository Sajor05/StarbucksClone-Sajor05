import { auth, db } from "../db/fireBase.js";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect, useContext, createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

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

    const [cart, setCart] = useState(() => {
        const savedUser = localStorage.getItem("userData");
            if (savedUser) {
                try {
                    const parsedUser = JSON.parse(savedUser);
                    return Array.isArray(parsedUser.cart) ? parsedUser.cart : []; 
                } catch (error) {
                    return [];
                }
            }
            return [];
    });

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return !!localStorage.getItem("userData");
    });
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user && user.uid) {
            const updatedUser = { ...user, cart: cart };
            localStorage.setItem("userData", JSON.stringify(updatedUser));
            const docRef = doc(db, "users", user.uid);
            updateDoc(docRef, { cart: cart })
                .catch((error) => console.error("Error guardando carrito en FB:", error));
        }
    }, [cart, user]);


    async function signup(email, address, username, password) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const currentUser = userCredential.user;
        const newUserIds = {
            uid: currentUser.uid,
            email: email,
            address: address,
            username: username,
            password: password,
            cart: [],
            createdAt: new Date().toISOString()
        };
        await setDoc(doc(db, "users", currentUser.uid), newUserIds);
        setUser(newUserIds);
        setCart([]);
        setIsAuthenticated(true);
    }

    async function signin(email, password) {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        signOut(auth);
        localStorage.removeItem("userData");
        setUser(null);
        setCart([]);
        setIsAuthenticated(false);
    };

  const handleRemoveItem = (product) => {
    const newCart = cart.filter((p) => p.title != product.title)
    setCart(newCart)
  }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const docRef = doc(db, "users", currentUser.uid);
                const userSnap = await getDoc(docRef);

                if (userSnap.exists()) {
                    const userData = userSnap.data();
                    setUser({...userData, uid: currentUser.uid});
                    setCart(userData.cart || []); 
                    setIsAuthenticated(true);
                }
            } else {
                setUser(null);
                setCart([]);
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
                cart,
                setCart,
                handleRemoveItem
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};