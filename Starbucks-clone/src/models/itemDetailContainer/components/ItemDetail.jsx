import "./ItemDetail.css";
import { useCart } from "../../../context/CartContext";

export const ItemDetail = ({ item }) => {
  const { handleAddItem } = useCart();

  return (
    <main>
      <div className="Item-container flex flex-row gap-5 align-middle justify-center bg-[#1e3932] h-62.5">
        <img src={item.image} alt={item.title} />
        <span className="text-white text-[28px] font-bold">{item.title}</span>
      </div>
      <div className="Item-description-continer flex justify-center mt-7">
        <div className="Item-description w-165 h-12">
          <span className="text-justify text-[#000000DE] font-semibold">
            {item.description}
          </span>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-[#1e3932] p-1.5 rounded-full cursor-pointer"
          onClick={() => handleAddItem(item)}
        >
          <span className="text-[16px] text-white font-bold">
            + ${item.price}
          </span>
        </button>
      </div>
    </main>
  );
};
