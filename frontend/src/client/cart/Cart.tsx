import { BsCartPlus } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export const Cart = () => {
  return (
    <div className="border h-auto border-gray-400 rounded-sm">
      <CartHeader />
      <CartProducts />
      <BuyButton />
    </div>
  );
};

const CartProducts = () => {
  const { cart, handleRemoveItem } = useCart();
  return (
    <div className="h-110 overflow-y-auto">
      <div className="flex flex-col mt-1 gap-4">
        {cart.length > 0 ? (
          cart.map((p, i) => (
            <div key={i}>
              <div className="main-row flex flex-row justify-between">
                <div className="flex flex-row gap-1 text-left px-5.5 font-light">
                  <span>{`${p.title}`}</span>
                  <span>x{`${p.currentItemCount}`}</span>
                </div>
                <div className="flex gap-2.5 mr-5">
                  <span className="font-semibold">
                    ${`${p.price * p.currentItemCount}`}
                  </span>
                  <button
                    onClick={() => handleRemoveItem(p)}
                    className="cursor-pointer"
                  >
                    <FaRegTrashAlt size={15} />
                  </button>
                </div>
              </div>
              <hr className="ml-3 mt-1 w-83 text-gray-300" />
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="font-light text-[14px]">
              No hay productos en el carrito
            </p>
          </div>
        )}
      </div>
      <div className="cart-total-price-container text-center mt-5">
        {cart.length > 0 ? (
          <span className="cart-total-price text-[22px] font-semibold">
            Total $
            {cart.reduce(
              (total, item) => total + item.price * item.currentItemCount,
              0,
            )}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const CartHeader = () => {
  return (
    <header className="p-5">
      <div className="flex flex-row gap-2 justify-center items-center">
        <BsCartPlus size={24} />
        <span className="font-semibold text-[23px]">Carrito</span>
      </div>
      <hr className="text-gray-300" />
    </header>
  );
};

const BuyButton = () => {
  const { handleBuy } = useCart();
  return (
    <div className="flex justify-center mb-5 lg:mt-3">
      <button
        onClick={() => handleBuy()}
        className="bg-[#1e3932] text-center p-2 rounded-full cursor-pointer"
      >
        <span className="text-white font-bold">Finalizar compra</span>
      </button>
    </div>
  );
};
