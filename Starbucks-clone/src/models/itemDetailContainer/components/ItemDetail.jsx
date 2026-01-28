import "./ItemDetail.css"
import { useAuth } from "../../../context/AuthContext";

export const ItemDetail = ({ item }) => {
  const { cart, setCart } = useAuth()
  const handleAdd = () => {
      const foundItem = cart.find((i) => i.title === item.title)
      if (foundItem) {
          const newCart = cart.map((i) => {
          if (i.title === item.title) {
              return { ...i, currentItemCount: i.currentItemCount + 1 };
          }
          return i;
          });
      setCart(newCart);
      }
      else{
      const newItem = { ...item, currentItemCount:1 }
      setCart([...cart, newItem])
      }
  }
  return (
    <main>
        <div className="Item-container flex flex-row gap-5 align-middle justify-center bg-[#1e3932] h-62.5">
          <img src={item.image} alt={item.title} />
          <span className="text-white text-[28px] font-bold">{item.title}</span>
        </div>
        <div className="Item-description-continer flex justify-center mt-7">
          <div className="Item-description w-165 h-12">
            <span className="text-justify text-[#000000DE] font-semibold">{item.description}</span>
          </div>
        </div>
        <div className="text-center mt-8">
          <button 
            className="bg-[#1e3932] p-1.5 rounded-full cursor-pointer"
            onClick={handleAdd}
          >
            <span className="text-[16px] text-white font-bold">+Agregar al carrito</span>
          </button>          
        </div>


    </main>
  );
};