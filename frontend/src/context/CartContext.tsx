import { useState, useEffect, useContext, createContext, useRef } from "react";
import { userUpdateRequest } from "../api/auth";
import { useAuth } from "./AuthContext";
import type {
  CartContextType,
  Product,
  PurchaseHistory,
  CartProviderProps,
} from "../interface/Interface";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart debe usarse dentro de un CartProvider");
  return context;
}

export function CartProvider({ children }: CartProviderProps) {
  const { user, updateUserLocal, loading } = useAuth();

  const [cart, setCart] = useState<Product[]>([]);
  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseHistory[]>([]);

  const lastUserId = useRef<string | null>(null);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      setCart([]);
      setPurchaseHistory([]);
      lastUserId.current = null;
      return;
    }

    const currentUserId = (user as any)._id || (user as any).id;

    if (currentUserId !== lastUserId.current) {
      const dbCart = user.cart || [];
      const dbHistory = user.purchaseHistory || [];

      setCart(dbCart);
      setPurchaseHistory(dbHistory);

      localStorage.setItem(
        `userData_${currentUserId}`,
        JSON.stringify({
          cart: dbCart,
          purchaseHistory: dbHistory,
        }),
      );

      lastUserId.current = currentUserId;
    }
  }, [user, loading]);

  const saveData = async (
    newCart: Product[],
    newHistory: PurchaseHistory[],
  ) => {
    setCart(newCart);
    setPurchaseHistory(newHistory);

    if (user) {
      const userId = (user as any)._id || (user as any).id;

      localStorage.setItem(
        `userData_${userId}`,
        JSON.stringify({
          cart: newCart,
          purchaseHistory: newHistory,
        }),
      );

      try {
        await userUpdateRequest({
          email: user.email,
          cart: newCart,
          purchaseHistory: newHistory,
        });

        if (updateUserLocal) {
          updateUserLocal({
            ...user,
            cart: newCart,
            purchaseHistory: newHistory,
          });
        }
      } catch (error) {
        console.error("Error guardando en BD:", error);
      }
    }
  };

  const handleAddItem = async (item: Product) => {
    const foundItem = cart.find((i) => i.title === item.title);
    let newCart: Product[];

    if (foundItem) {
      newCart = cart.map((i) =>
        i.title === item.title
          ? { ...i, currentItemCount: i.currentItemCount + 1 }
          : i,
      );
    } else {
      newCart = [...cart, { ...item, currentItemCount: 1 }];
    }
    await saveData(newCart, purchaseHistory);
  };

  const handleRemoveItem = async (product: Product) => {
    const newCart = cart.filter((p) => p.title !== product.title);
    await saveData(newCart, purchaseHistory);
  };

  const handleBuy = async () => {
    if (cart.length === 0) return;
    const simpleDate = new Date()
      .toLocaleDateString("en-ZA")
      .replace(/-/g, "/");

    const newPurchase = {
      date: simpleDate,
      items: [...cart],
      total: cart.reduce(
        (acc, item) => acc + item.price * item.currentItemCount,
        0,
      ),
    };

    const newHistory = [...purchaseHistory, newPurchase];
    await saveData([], newHistory);
  };

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
