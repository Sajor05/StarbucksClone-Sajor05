import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProucts";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ProductDetail } from "./components/ProductDetail";

export const ProductDetailCard = () => {
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
      <ProductDetail item={findItem} />
      <Footer />
    </>
  );
};
