import { Link } from "react-router-dom";
import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navbar/Navbar";
import { RegisterForm } from "./components/RegisterForm";

export function RegisterPage() {
  return (
    <>
        <Navbar/>
        <RegisterForm/>
        <div className="text-center">
            <Link to={"/iniciar-sesion"}>¿Ya tenes cuenta? <span className="text-blue-500 underline">Inicia sesión</span></Link>
        </div>
        <Footer/>
    </>
    
  )
}
