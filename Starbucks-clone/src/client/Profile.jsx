import { Cart } from "./cart/Cart";
import { Title } from "../models/Title"
import { CiCoffeeCup } from "react-icons/ci";
import { PiUserListBold } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { MdMarkEmailRead } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export function Profile() {
  const { user } = useAuth()
  return (
    <>
        <Navbar/>
        <Title
          text={`!Bienvenido otra vez ${user.username}`}
        />
        <main className="px-88 flex justify-center">
          <div className="grid grid-cols-[800px_400px] gap-3 p-5 mt-2">
            <div className="border h-150 border-gray-400 rounded-sm">
              <div className="flex flex-col">
                <UserData user={user}/>
                <div className="p-5">
                  <header>
                    <div className="flex flex-row items-center gap-1.5">
                      <CiCoffeeCup
                        size={32}
                      />
                      <span className="font-semibold text-[23px]">Mis compras</span>
                    </div>
                    <hr className="text-gray-400" />
                  </header>
                </div>
              </div>
            </div>
            <Cart/>
          </div>
        </main>
        <Footer/>
    </>
    
  )
}

const UserData = ({user}) => {
  return(
        <div className="user-data p-5">
          <header>
            <div className="flex flex-row gap-3 items-center">
              <BiSolidUserAccount size={32} />
              <span className="font-semibold text-[23px]">Mis datos</span>
            </div>
            <hr className="text-gray-400" />
          </header>

          {/* D A T A */}

          <div className="user-data flex flex-col gap-4 text-[19px]">

            {/* U S E R N A M E  D A T A */}

            <div className="flex gap-3 mt-8">
              <div className="flex flex-row items-center gap-1.5">
                <PiUserListBold
                  size={28}
                />
                <span className="font-semibold ">Nombre: </span>                
              </div>
              <span>{`${user.username}`}</span>
            </div>

            {/* E M A I L  D A T A */}

            <div className="flex gap-3">
              <div className="flex flex-row items-center gap-1.5">
                <MdMarkEmailRead
                  size={25}
                />
                <span className="font-semibold">Email: </span>
              </div>
              <span>{`${user.email}`}</span>
            </div>

            {/* A D D R E S S  D A T A */}

            <div className="user-address-data flex gap-3">
              <div className="flex flex-row items-center gap-1.5">
                <FaMapMarkedAlt
                  size={25}
                />
                <span className="font-semibold">Direccion: </span>
              </div>
              <span>{`${user.address}`}</span>
            </div>
          </div>
        </div>
  )
}
