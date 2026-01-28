import { FaRegTrashAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext"
import { BsCartPlus } from "react-icons/bs";

export const Cart = () => {
  return(
      <div className="border h-150 border-gray-400 rounded-sm">
        <header className="p-5">
          <div className="flex flex-row gap-2 justify-center items-center">
            <BsCartPlus
              size={24}
            />
            <span className="font-semibold text-[23px]">Carrito</span>
          </div>
          <hr className="text-gray-300" />
          <CartProducts/>
        </header>
      </div>
  )
}

const CartProducts = () => {
  const{ cart, handleRemoveItem } = useAuth()
  return(
        <div className="flex flex-col mt-5 gap-3">
            {cart.length > 0 ? cart.map((p, i) => (
              <div key={i}>
                <div className="main-row flex flex-row justify-between">
                  <div className="flex flex-row gap-1 text-left px-5.5 font-light">
                    <span>{`${p.title}`}</span>
                    <span>x{`${p.currentItemCount}`}</span>                    
                  </div>
                  <div className="flex gap-2.5 mr-5">
                    <span className="font-semibold">${`${p.price * p.currentItemCount}`}</span>
                    <button onClick={() => handleRemoveItem(p)} className="cursor-pointer">
                        <FaRegTrashAlt
                          size={15}
                        />
                    </button>                    
                  </div>

                </div>
                <hr className="ml-3 mt-1 w-83 text-gray-300" />      
              </div>))

            : 
              <div className="text-center">
                  <p className="font-light text-[14px]">No hay productos en el carrito</p>
              </div>
          }
        </div>
  )
}