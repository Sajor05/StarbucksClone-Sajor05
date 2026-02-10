import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect, useRef } from "react";

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!user) return <NoUserFound />;

  return (
    <div ref={modalRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer font-semibold uppercase hover:opacity-[.8] transition text-[14px] mt-0.5"
      >
        <FaRegUser className="mt-0.5" size={16} />
        <svg
          className={`w-3 h-3 mt-1.5 ml-0.5 rotate-270 transition-transform ${isOpen ? "rotate-360" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white font-semibold rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden">
          <Link
            to={`/perfil/${user.username}`}
            className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            Mi cuenta
          </Link>

          <hr className="border-gray-200" />

          <Link
            to={"/"}
            onClick={() => logout()}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            Cerrar Sesión
          </Link>
        </div>
      )}
    </div>
  );
}

export const NoUserFound = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="text-[29px] font-semibold text-red-600">
        Usuario no encontrado
      </span>
    </div>
  );
};
