import "./ProductDetail.css";
import { useCart } from "../../../context/CartContext";
import { Navbar } from "../../../components/navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import { Link } from "react-router-dom";
import type {
  BuyButtonProp,
  ProductDetailProp,
} from "../../../interface/Interface";
import { useAuth } from "../../../context/AuthContext";

export const ProductDetail = ({ item }: ProductDetailProp) => {
  if (!item) {
    return <NoProduct />;
  }

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
        <BuyButton item={item} />
      </div>
    </main>
  );
};

const BuyButton = ({ item }: BuyButtonProp) => {
  const { handleAddItem } = useCart();
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <button
      className="bg-[#1e3932] p-1.5 rounded-full cursor-pointer"
      onClick={() => handleAddItem(item)}
    >
      <span className="text-[16px] text-white font-bold">+ ${item.price}</span>
    </button>
  ) : (
    <Link
      to={"/iniciar-sesion"}
      className="bg-[#1e3932] p-1.5 rounded-full cursor-pointer"
    >
      <span className="text-[16px] text-white font-bold">+ ${item.price}</span>
    </Link>
  );
};

const NoProduct = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <span className="text-[25px] font-bold text-[#1e3932] uppercase">
          Producto no encontrado
        </span>
      </div>
      <Footer />
    </>
  );
};
