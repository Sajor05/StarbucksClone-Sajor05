import "./App.css";
import { Home } from "./pages/home/Home";
import { Coffee } from "./pages/coffee/Coffee";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/contact/Contact";
import { Payment } from "./pages/payment/Payment";
import { Profile } from "./client/profile/Profile";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { MenuListContainer } from "./pages/menu/Menu";
import { LoginForm } from "./components/auth/login/LoginForm";
import { RegisterForm } from "./components/auth/register/RegisterForm";
import { ExperienceStarBucks } from "./pages/experience/ExperienceStarBucks";
import { ProductDetailCard } from "./models/productDetailCard/ProductDetailCard";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuListContainer />} />
          <Route path="/perfil/:username" element={<Profile />} />
          <Route path="/articulo/contacto" element={<Contact />} />
          <Route path="/registrarse" element={<RegisterForm />} />
          <Route path="/iniciar-sesion" element={<LoginForm />} />
          <Route path="/menu/:title" element={<MenuListContainer />} />
          <Route path="/articulo/medios-de-pago" element={<Payment />} />
          <Route path="/item/:title" element={<ProductDetailCard />} />
          <Route path="/articulo/lets-talk-coffee" element={<Coffee />} />
          <Route path="/producto/:title" element={<MenuListContainer />} />
          <Route
            path="/seccion/experiencia-starbucks"
            element={<ExperienceStarBucks />}
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
