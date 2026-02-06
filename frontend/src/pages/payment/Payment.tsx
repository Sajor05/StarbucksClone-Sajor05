import { Title } from "../../models/titleCard/Title";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const Payment = () => {
  return (
    <>
      <Navbar />
      <Title text={"Medios de pago"} />
      <div className="mt-5 px-155">
        <span className="text-[14px]">
          Medios de Pago aceptados: efectivo, tarjeta de crédito, tarjeta de
          débito y pago con QR.
        </span>
      </div>
      <Footer />
    </>
  );
};
