import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
} from "../api/auth.ts";
import type { User, AuthContextType } from "../interface/Interface.ts";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const signup = async (user: User) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async (user: User) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/api/logout",
        {},
        { withCredentials: true },
      );

      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("userData_")) {
          localStorage.removeItem(key);
        }
      });

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error al cerrar sesión en el servidor:", error);
    }
  };

  const updateUserLocal = (updatedUser: User) => {
    setUser(updatedUser);
  };

  useEffect(() => {
    async function checkLogin() {
      try {
        const res = await verifyTokenRequest();

        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        // Si el backend dice OK, restauramos usuario
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        // Si la cookie no existe o es invalida, el backend tira error
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        user,
        isAuthenticated,
        loading,
        updateUserLocal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
