import "./Navbar.css"
import { NavLink } from "react-router-dom"
import { Dropdown } from "../dropdown/Dropdown"
import { FaMapMarkerAlt } from "react-icons/fa";
import { CartModal } from "../../client/cart/CartModal"
import { useAuth } from "../../context/AuthContext"

export const Navbar = () => {
    const{isAuthenticated} = useAuth()
    return(
        <nav className="navbar flex gap-10 p-4">
            <div className="flex flex-row ml-85 gap-5">
                <Logo/>
                <div className="flex gap-145 p-5">
                    <NavLinkPage/>
                    <div className="nav-locate-container flex flex-row w-80 gap-5">
                        <NavLink className="font-semibold flex hover:opacity-[.8]">
                            <FaMapMarkerAlt
                                className="mt-0.5 mr-0.5"
                                size={18}
                            />
                            Localizar Tienda
                        </NavLink>
                        {isAuthenticated
                         ? <div className="flex flex-row gap-5">
                            <Dropdown/>
                            <CartModal/>
                           </div>
                         : <NavLink to="/iniciar-sesion" className="font-semibold hover:opacity-[.8]">Iniciar sesión</NavLink>}
                    </div>       
                </div>                
            </div>
        </nav>
    )
}

const NavLinkPage = () => {
    return(
        <div className="nav-links flex gap-13 w-100 text-[16px]">
            <NavLink to="/menu" className="menu-item hover:text-[#00754a]"><span className="uppercase font-bold">Menú</span></NavLink>
            <NavLink to="/articulo/lets-talk-coffee" className="menu-item hover:text-[#00754a]"><span className="uppercase font-bold">Café</span></NavLink>
            <NavLink to="/seccion/experiencia-starbucks" className="menu-item hover:text-[#00754a]"><span className="uppercase font-bold">Experiencia Starbucks</span></NavLink>
        </div>
    )
}

const Logo = () => {
    return(
        <div className="navbar-brand-container mt-1">
            <NavLink to="/" className="navbar-brand">
                <img 
                    src="https://www.starbucks.com.ar/static/images/logo.svg" 
                    alt="Starbucks logo"
                    className="w-13 h-13"
                />
            </NavLink>
        </div>
    )
}