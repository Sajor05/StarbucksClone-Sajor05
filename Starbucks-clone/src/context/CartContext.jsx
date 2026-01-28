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
    const{user}=useAuth()
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

  const handleAddItem = () => {
      const foundItem = cart.find((i) => i.title === item.title)
      if (foundItem) {
          const newCart = cart.map((i) => {
          if (i.title === item.title) {
              return { ...i, currentItemCount: i.currentItemCount + 1 };
          }
          return i;
          });
      setCart(newCart);
      }
      else{
      const newItem = { ...item, currentItemCount:1 }
      setCart([...cart, newItem])
      }
  }

    const handleRemoveItem = (product) => {
        const newCart = cart.filter((p) => p.title != product.title)
        setCart(newCart)
    }

    useEffect(() => {
        if (user && user.uid) {
            const updatedUser = { ...user, cart: cart };
            localStorage.setItem("userData", JSON.stringify(updatedUser));
            const docRef = doc(db, "users", user.uid);
            updateDoc(docRef, { cart: cart })
                .catch((error) => console.error("Error guardando carrito:", error));
        }
    }, [cart, user]);

    return(
        <CartContext.Provider
            value={{
                cart,
                setCart,
                handleRemoveItem,
                handleAddItem
            }}
        >
            {children}
        </CartContext.Provider>
    )
}