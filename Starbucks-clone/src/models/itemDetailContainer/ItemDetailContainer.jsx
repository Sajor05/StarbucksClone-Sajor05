import { useParams } from "react-router-dom";
import { ItemDetail } from "./components/ItemDetail";
import { useProducts } from "../../hooks/ProductsHook";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const ItemDetailContainer = () => {
  const { title } = useParams();
  const products = useProducts();
  const findItem = products.find((p) => p.title == title);
  if (products.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center">
          <span className="text-[25px] font-bold text-[#1e3932]">
            Cargando...
          </span>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {findItem ? <ItemDetail item={findItem} /> : <NoProduct />}
      <Footer />
    </>
  );
};

const NoProduct = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <span className="text-[25px] font-bold text-[#1e3932] uppercase">
          El producto "{title}" no existe
        </span>
      </div>
      <Footer />
    </>
  );
};
