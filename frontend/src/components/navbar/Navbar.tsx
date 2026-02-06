import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";
import { CartModal } from "../../client/cart/CartDropdown";
import type { NavLinkPageProps } from "../../interface/Interface";
import { ProfileDropdown } from "../../client/profile/ProfileDropdown";

export const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="hidden lg:flex">
              <NavLinkPage />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <NavLink
              to={""}
              className="font-semibold flex items-center hover:opacity-[.8]"
            >
              <FaMapMarkerAlt className="mr-2" size={18} />
              Localizar Tienda
            </NavLink>

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <ProfileDropdown />
                <CartModal />
              </div>
            ) : (
              <NavLink
                to="/iniciar-sesion"
                className="font-semibold hover:opacity-[.8]"
              >
                Iniciar sesión
              </NavLink>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-4">
            {isAuthenticated && <CartModal />}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white border-t border-gray-100`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <NavLinkPage mobile onClick={() => setIsOpen(false)} />
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-4">
            <NavLink to={""} className="font-semibold flex items-center py-2">
              <FaMapMarkerAlt className="mr-2" size={18} />
              <span>Localizar Tienda</span>
            </NavLink>
            {!isAuthenticated && (
              <NavLink
                to="/iniciar-sesion"
                className="login-button bg-[#1e3932] text-white text-center font-bold"
              >
                Iniciar sesión
              </NavLink>
            )}
            {isAuthenticated && (
              <div className="flex justify-start">
                <ProfileDropdown />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinkPage = ({ mobile, onClick }: NavLinkPageProps) => {
  const baseStyles =
    "menu-item uppercase font-bold tracking-widest text-sm hover:text-[#00754a] transition-colors";
  const layoutStyles = mobile ? "flex flex-col gap-5 py-4" : "flex gap-8";

  return (
    <div className={layoutStyles}>
      <NavLink onClick={onClick} to="/menu" className={baseStyles}>
        Menú
      </NavLink>
      <NavLink
        onClick={onClick}
        to="/articulo/lets-talk-coffee"
        className={baseStyles}
      >
        Café
      </NavLink>
      <NavLink
        onClick={onClick}
        to="/seccion/experiencia-starbucks"
        className={baseStyles}
      >
        Experiencia Starbucks
      </NavLink>
    </div>
  );
};

const Logo = () => (
  <NavLink to="/" className="shrink-0">
    <img
      src="https://www.starbucks.com.ar/static/images/logo.svg"
      alt="Starbucks logo"
      className="w-12 h-12 md:w-14 md:h-14"
    />
  </NavLink>
);
