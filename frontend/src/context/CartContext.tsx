import type { ReactNode } from "react";
import { userUpdateRequest } from "../api/auth";
import { useState, useEffect, useContext, createContext, useRef } from "react";
import { useAuth } from "./AuthContext";
import type {
  CartContextType,
  Product,
  User,
  PurchaseHistory,
} from "../interface/Interface";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  // Traemos updateUserLocal
  const { user, updateUserLocal } = useAuth();
  const lastUserId = useRef<string | null>(null);

  // 1. INICIALIZACIÓN (Esto lo mantenemos igual, carga de LocalStorage)
  const [cart, setCart] = useState<Product[]>(() => {
    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      try {
        const parsedUser: User = JSON.parse(savedUser);
        if (parsedUser._id) lastUserId.current = parsedUser._id;
        return Array.isArray(parsedUser.cart) ? parsedUser.cart : [];
      } catch (error) {
        return [];
      }
    }
    return [];
  });

  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseHistory[]>(
    () => {
      const savedUser = localStorage.getItem("userData");
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser) as User;
          return Array.isArray(parsedUser.purchaseHistory)
            ? parsedUser.purchaseHistory
            : [];
        } catch (error) {
          return [];
        }
      }
      return [];
    },
  );

  // 2. SINCRONIZACIÓN INTELIGENTE (LA SOLUCIÓN)
  useEffect(() => {
    // Si hay un usuario logueado...
    if (user) {
      const isFirstSync = lastUserId.current === null;
      const userChanged = user._id !== lastUserId.current;

      // --- CORRECCIÓN AQUÍ ---
      // Verificamos si hay datos LOCALES relevantes (ya sea en carrito O historial)
      const hasLocalData = cart.length > 0 || purchaseHistory.length > 0;

      // Si es la primera carga (F5) Y tenemos datos locales...
      if (isFirstSync && hasLocalData) {
        // Damos prioridad a lo local.
        // Marcamos como sincronizado para que no vuelva a entrar aquí.
        lastUserId.current = user._id;
        const payload = {
          email: user.email,
          cart: cart,
          purchaseHistory: purchaseHistory,
        };

        userUpdateRequest(payload).catch((e) =>
          console.error("Error syncing initial data", e),
        );
      }
      // Si es un cambio de usuario real (Login normal), tomamos lo del servidor
      else if (userChanged) {
        setCart(user.cart || []);
        setPurchaseHistory(user.purchaseHistory || []);
        lastUserId.current = user._id;
      }
    }
    // Logout
    else if (!user && lastUserId.current) {
      setCart([]);
      setPurchaseHistory([]);
      lastUserId.current = null;
    }
  }, [user]); // Dependencia solo [user]

  // 3. PERSISTENCIA EN LOCALSTORAGE Y AUTHCONTEXT
  useEffect(() => {
    // A. Guardar en LocalStorage
    const savedUser = localStorage.getItem("userData");
    let currentUserData = savedUser ? JSON.parse(savedUser) : {};

    // Si tenemos usuario real, usamos su info, si no, mantenemos estructura básica
    if (user) currentUserData = { ...user, ...currentUserData };

    const updatedData = {
      ...currentUserData,
      cart,
      purchaseHistory,
    };

    localStorage.setItem("userData", JSON.stringify(updatedData));

    // B. Mantener AuthContext sincronizado para evitar reversiones
    if (user && updateUserLocal) {
      // Solo llamamos si hay diferencias para evitar render loops
      if (JSON.stringify(user.cart) !== JSON.stringify(cart)) {
        updateUserLocal({ ...user, cart, purchaseHistory });
      }
    }
  }, [cart, purchaseHistory]); // Se ejecuta cada vez que modificas el carrito

  // ... (Tus funciones handleAddItem, Remove, Buy se quedan igual) ...

  const handleAddItem = async (item: Product) => {
    if (user) {
      const foundItem = cart.find((i) => i.title === item.title);
      if (foundItem) {
        const newCart = cart.map((i) => {
          if (i.title === item.title) {
            return { ...i, currentItemCount: i.currentItemCount + 1 };
          }
          return i;
        });
        setCart(newCart);
      } else {
        const newItem: Product = { ...item, currentItemCount: 1 };
        setCart([...cart, newItem]);
        const payload = {
          email: user.email,
          cart: cart,
          purchaseHistory: purchaseHistory,
        };
        await userUpdateRequest(payload);
      }
    }
  };

  const handleRemoveItem = async (product: Product) => {
    if (user) {
      const newCart = cart.filter((p) => p.title !== product.title);
      setCart(newCart);
      const payload = {
        email: user.email,
        cart: cart,
        purchaseHistory: purchaseHistory,
      };
      await userUpdateRequest(payload);
    }
  };

  const handleBuy = () => {
    if (cart.length === 0) return;
    const simpleDate = new Date()
      .toLocaleDateString("en-ZA")
      .replace(/-/g, "/");
    const newPurchaseHistory: PurchaseHistory = {
      date: simpleDate,
      items: [...cart],
      total: cart.reduce(
        (acc, item) => acc + item.price * item.currentItemCount,
        0,
      ),
    };
    setPurchaseHistory((prevHistory) => [...prevHistory, newPurchaseHistory]);
    setCart([]);
  };

  // 4. GUARDADO EN DB (Debounce)
  useEffect(() => {
    if (user && user._id) {
      const timer = setTimeout(async () => {
        try {
          const payload = {
            email: user.email,
            cart: cart,
            purchaseHistory: purchaseHistory,
          };
          await userUpdateRequest(payload);
        } catch (error) {
          console.log(error);
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [cart, purchaseHistory]);
  // Nota: Quitamos 'user' de las dependencias de este último useEffect
  // para que solo se dispare cuando el carrito cambia, no cuando el user se actualiza.

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        purchaseHistory,
        setPurchaseHistory,
        handleRemoveItem,
        handleAddItem,
        handleBuy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
