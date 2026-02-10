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

  // Usamos esto para detectar CUÁNDO ocurre el Login exacto
  const lastUserId = useRef<string | null>(null);

  // -----------------------------------------------------------------------
  // 1. EFECTO DE SINCRONIZACIÓN (Maneja Login, Logout y Recarga)
  // -----------------------------------------------------------------------
  useEffect(() => {
    // Si Auth está cargando, no hacemos nada (protege la recarga F5)
    if (loading) return;

    // CASO A: Logout (No hay usuario)
    if (!user) {
      setCart([]);
      setPurchaseHistory([]);
      lastUserId.current = null; // Reseteamos para que el próximo login se detecte como nuevo
      return;
    }

    const currentUserId = (user as any)._id || (user as any).id;

    // CASO B: Login Detectado (El ID cambió de null a algo, o de usuario A a usuario B)
    if (currentUserId !== lastUserId.current) {
      console.log("Login detectado: Importando datos de la Base de Datos...");

      // 1. Tomamos los datos DIRECTAMENTE de la Base de Datos (prioridad máxima)
      const dbCart = user.cart || [];
      const dbHistory = user.purchaseHistory || [];

      // 2. Actualizamos el Estado Visual
      setCart(dbCart);
      setPurchaseHistory(dbHistory);

      // 3. Resucitamos el LocalStorage con los datos de la BD
      // (Esto arregla que al cerrar y abrir sesión, el LS esté sincronizado)
      localStorage.setItem(
        `userData_${currentUserId}`,
        JSON.stringify({
          cart: dbCart,
          purchaseHistory: dbHistory,
        }),
      );

      // Marcamos este usuario como "Cargado"
      lastUserId.current = currentUserId;
    }

    // NOTA: Si es el MISMO usuario (recarga F5), no entra al if,
    // y el estado se mantiene gracias a que React no pierde estado en re-renders simples,
    // o si se perdió, el AuthContext ya te devolvió el user con datos.
  }, [user, loading]);

  // -----------------------------------------------------------------------
  // 2. FUNCIÓN PARA GUARDAR CAMBIOS (Agregar/Quitar items)
  // -----------------------------------------------------------------------
  const saveData = async (
    newCart: Product[],
    newHistory: PurchaseHistory[],
  ) => {
    // 1. Actualizamos UI
    setCart(newCart);
    setPurchaseHistory(newHistory);

    if (user) {
      const userId = (user as any)._id || (user as any).id;

      // 2. Actualizamos LocalStorage (Para que sobreviva al F5)
      localStorage.setItem(
        `userData_${userId}`,
        JSON.stringify({
          cart: newCart,
          purchaseHistory: newHistory,
        }),
      );

      // 3. Enviamos a MongoDB
      try {
        await userUpdateRequest({
          email: user.email,
          cart: newCart,
          purchaseHistory: newHistory,
        });

        // 4. Mantenemos el AuthContext al día
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

  // -----------------------------------------------------------------------
  // 3. HANDLERS
  // -----------------------------------------------------------------------
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
