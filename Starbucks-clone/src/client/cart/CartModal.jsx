import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom"
import { AiOutlineProduct } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext"
import { useEffect, useState, useRef } from "react"

export function CartModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useAuth()
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {

        if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false)
        }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {document.removeEventListener("mousedown", handleClickOutside)}
  },[modalRef])
  return (
    <div ref={modalRef} className="relative inline-block text-left">
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer font-semibold uppercase hover:opacity-[.8] transition text-[14px] mt-0.5"
        >
            <BsCart2
                className="mt-0"
                size={20}
            />
        </button>
        {isOpen && (
                    <div 
                        className="absolute -right-50 mt-2 h-210 w-100 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden px-8">
                        <header className="text-center py-3">
                            <span className="text-[19px] font-semibold">Carrito</span>
                            <hr className="text-gray-300" />
                        </header>
                        <div className="h-170 p-3">
                            <div className="flex flex-col gap-6">
                                {cart.length > 0 ? cart.map((p, i) => (
                                    <div key = {i} className="flex flex-col gap-1.5">
                                        <div className="flex flex-row gap-2">
                                            <AiOutlineProduct
                                                size={25}
                                                className="mt-0"
                                            />
                                            <div className="flex flex-row gap-5">
                                                <div className="w-55">
                                                    <span className="font-light">{`${p.title}`}</span>
                                                </div>
                                                
                                                <span>x{`${p.currentItemCount}`}</span>                                            
                                            </div>
                                        </div>
                                        <div className="pr-4 pl-1">
                                            <hr className="text-gray-300" />
                                        </div>
                                    </div>

                                ))
                                :
                                    <div className="text-center">
                                        <p className="font-light text-[14px]">No hay productos en el carrito</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <BuyButton/>
                    </div>      
                   )
      }
    </div>
  )
}

const BuyButton = () => {
    return(
        <>  
            <hr className="text-gray-300" />
            <div className="flex justify-center mt-3">
                <button className="bg-[#1e3932] text-center p-2 rounded-full cursor-pointer">
                    <Link to={'/perfil/:username'} className="text-white font-bold">Finalizar compra</Link>
                </button>
            </div>        
        </>

    )
}