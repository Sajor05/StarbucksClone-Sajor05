import { db } from "../db/fireBase.js";
import { useAuth } from "./AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { useState, useEffect, useContext, createContext } from "react";

const CartContext = createContext()

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context
}

export function CartProvider({children}) {
    const { user } = useAuth();

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

    const [purchaseHistory, setPurchaseHistory] = useState(() => {
        const savedUser = localStorage.getItem("userData");
        if (savedUser) {
            try {
                const parsedUser = JSON.parse(savedUser);
                return Array.isArray(parsedUser.purchaseHistory) ? parsedUser.purchaseHistory : []; 
            } catch (error) {
                return [];
            }
        }
        return [];
    })

    useEffect(() => {
        if (user && user.cart && user.purchaseHistory) {
            setCart(user.cart || []);
            setPurchaseHistory(user.purchaseHistory || []);
        } else if (!user) {
            setCart([]);
            setPurchaseHistory([]);
            localStorage.removeItem("userData")
        }
    }, [user]); 

    const handleAddItem = (item) => { 
        const foundItem = cart.find((i) => i.title === item.title)
        if (foundItem) {
            const newCart = cart.map((i) => {
                if (i.title === item.title) {
                    return { ...i, currentItemCount: i.currentItemCount + 1 };
                }
                return i;
            });
            setCart(newCart);
        } else {
            const newItem = { ...item, currentItemCount: 1 }
            setCart([...cart, newItem])
        }
    }

    const handleBuy = () => {
        const simpleDate = new Date().toLocaleDateString('en-ZA').replace(/-/g, '/');
        const newOrder = {
                date: simpleDate,
                items: [...cart],
                total: cart.reduce((acc, item) => acc + (item.price * item.currentItemCount), 0)
            };
        setPurchaseHistory(prevHistory => [...prevHistory, newOrder])
        setCart([])
    }

    const handleRemoveItem = (product) => {
        const newCart = cart.filter((p) => p.title !== product.title)
        setCart(newCart)
    }

    useEffect(() => {
        if (user && user.uid) {
            const updatedUser = { ...user, cart: cart, purchaseHistory: purchaseHistory };
            localStorage.setItem("userData", JSON.stringify(updatedUser));
            
            const docRef = doc(db, "users", user.uid);
            updateDoc(docRef, {
                cart: cart,
                purchaseHistory: purchaseHistory
            })
            .catch((error) => console.error("Error guardando carrito:", error));
        }
    }, [cart, user]);

    return(
        <CartContext.Provider
            value={{
                cart,
                setCart,
                purchaseHistory,
                setPurchaseHistory,
                handleRemoveItem,
                handleAddItem,
                handleBuy
            }}>
            {children}
        </CartContext.Provider>
    )
}