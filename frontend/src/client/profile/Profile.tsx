import { Cart } from "../cart/Cart";
import { Purchase } from "./Purchase";
import { PiUserListBold } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import { useAuth } from "../../context/AuthContext";
import { Title } from "../../models/titleCard/Title";
import type { UserDataProps } from "../../interface/Interface";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";

export function Profile() {
  usePageTitle("Mi cuenta | Starbucks");
  const { user } = useAuth();

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-[50vh]">
          <span className="text-[25px] md:text-[29px] font-bold text-[#1e3932] text-center px-4">
            Usuario no encontrado
          </span>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Title text={`¡Bienvenido otra vez ${user.username}!`} />
      <main className="w-full px-4 md:px-10 lg:px-20 xl:px-32 flex justify-center mb-10">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-5 p-0 md:p-5 mt-2 w-full max-w-[1400px]">
          {/* Columna Izquierda (Datos + Compras) */}
          <div className="border h-auto border-gray-400 rounded-sm w-full">
            <div className="flex flex-col">
              <UserData user={user} />
              <Purchase />
            </div>
          </div>

          {/* Columna Derecha (Carrito) - Se pone debajo en móvil, al lado en escritorio */}
          <div className="w-full">
            <Cart />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const UserData = ({ user }: UserDataProps) => {
  return (
    <div className="user-data p-4 md:p-5">
      <header>
        <div className="flex flex-row gap-3 items-center">
          <BiSolidUserAccount size={32} className="min-w-[32px]" />
          <span className="font-semibold text-[20px] md:text-[23px]">
            Mis datos
          </span>
        </div>
        <hr className="text-gray-400 mt-2" />
      </header>

      {/* D A T A */}
      <div className="user-data flex flex-col gap-4 text-[16px] md:text-[19px]">
        {/* U S E R N A M E  D A T A */}
        {/* Agregué break-all/break-words para que emails largos no rompan el celular */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-6 sm:mt-8">
          <div className="flex flex-row items-center gap-1.5 min-w-fit">
            <PiUserListBold size={28} />
            <span className="font-semibold">Nombre: </span>
          </div>
          <span className="break-words">{`${user.username}`}</span>
        </div>

        {/* E M A I L  D A T A */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <div className="flex flex-row items-center gap-1.5 min-w-fit">
            <MdMarkEmailRead size={25} />
            <span className="font-semibold">Email: </span>
          </div>
          <span className="break-all">{`${user.email}`}</span>
        </div>

        {/* A D D R E S S  D A T A */}
        <div className="user-address-data flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <div className="flex flex-row items-center gap-1.5 min-w-fit">
            <FaMapMarkedAlt size={25} />
            <span className="font-semibold">Direccion: </span>
          </div>
          <span className="break-words">{`${user.address}`}</span>
        </div>
      </div>
    </div>
  );
};
