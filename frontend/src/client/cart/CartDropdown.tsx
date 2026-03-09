import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { NoUserFound } from "../profile/ProfileDropdown";

export function CartModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        event.target instanceof Node &&
        !modalRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div ref={modalRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer font-semibold uppercase hover:opacity-[.8] transition text-[14px] mt-0.5"
      >
        <BsCart2 className="mt-0" size={20} />
      </button>
      {isOpen && (
        <div className="absolute z-50 -right-10 lg:-right-10 mt-2 h-135 w-96 bg-white rounded-lg shadow-xl border border-gray-100 px-8 flex flex-col">
          <header className="text-center py-3 shrink-0">
            <span className="text-[19px] font-semibold">Carrito</span>
            <hr className="text-gray-300 mt-2" />
          </header>

          <div className="max-h-[450px] overflow-y-auto p-3">
            <div className="flex flex-col gap-6">
              {cart.length > 0 ? (
                cart.map((p, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex flex-row gap-2">
                      <AiOutlineProduct size={25} className="mt-0 shrink-0" />
                      <div className="flex flex-row gap-5 items-center w-full justify-between">
                        <div className="w-48 truncate">
                          <span className="font-light">{`${p.title}`}</span>
                        </div>
                        <span className="shrink-0 font-medium">x{`${p.currentItemCount}`}</span>
                      </div>
                    </div>
                    <div className="pr-4 pl-1">
                      <hr className="text-gray-300" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4">
                  <p className="font-light text-[14px]">
                    No hay productos en el carrito
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="shrink-0">
            <GoBuyButton />
          </div>
        </div>
      )}
    </div>
  );
}

const GoBuyButton = () => {
  const { user } = useAuth();
  if (!user) return <NoUserFound />;
  return (
    <div className="p-5 pt-2">
      <hr className="text-gray-300 mb-3" />
      <div className="flex justify-center mt-3">
        <Link
          to={`/perfil/${user.username}`}
          className="bg-[#1e3932] w-full text-center p-2 rounded-full cursor-pointer hover:bg-[#152a24] transition-colors"
        >
          <span className="text-white font-bold">Comprar</span>
        </Link>
      </div>
    </div>
  );
};