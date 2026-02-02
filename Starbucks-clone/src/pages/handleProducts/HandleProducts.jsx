import { setCategories, setProducts } from "../../db/fireBase";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const HandleProducts = () => {
  return (
    <>
      <Navbar />
      <div>
        <header className="p-10 bg-[#1e3932] text-center">
          <span className="text-[48px] font-bold text-white uppercase">
            Subir JSON
          </span>
        </header>
        <div className="flex justify-center mt-20">
          <button
            className="cursor-pointer rounded-4xl w-auto bg-[#1e3932] text-white font-bold text-center p-2"
            onClick={setCategories}
          >
            Subir categorias
          </button>
        </div>
        <div className="flex justify-center mt-3">
          <button
            className="cursor-pointer rounded-4xl w-auto bg-[#1e3932] text-white font-bold text-center p-2"
            onClick={setProducts}
          >
            Subir productos
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
