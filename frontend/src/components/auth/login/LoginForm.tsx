import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { Navbar } from "../../navbar/Navbar";
import { Footer } from "../../footer/Footer";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import type { User } from "../../../interface/Interface";

export function LoginForm() {
  /*--------------
  --  H O O K S --
  --------------*/

  //useForm
  const { register, handleSubmit, watch } = useForm<User>();

  //useState
  const [show, setShow] = useState<boolean>(false);

  //useContext
  const { signin, isAuthenticated } = useAuth();

  //useEffect
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  /*-------------------------------------
  --  C O N S T  &&  F U N C T I O N S --
  -------------------------------------*/

  const passwordContent = watch("password");
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values: User) => {
    await signin(values);
    navigate("/");
  });

  return (
    <div>
      <Navbar />
      <div className="pt-5 flex justify-center">
        <form
          onSubmit={onSubmit}
          className="bg-white flex flex-col gap-5 border border-gray-400 py-5 px-8 w-100 rounded-lg"
        >
          <header className="text-center flex flex-col">
            <div className="p-5 flex justify-center items-center">
              <img
                src="https://www.starbucks.com.ar/static/images/logo.svg"
                alt="Sturbucks logo"
              />
            </div>
            <hr className="text-gray-300 pb-3" />
            <span className="text-[23px] font-semibold">
              ¡Bienvenido devuelta!
            </span>
            <span className="font-light text-[14px] mt-1">
              Porfavor inicie sesión para continuar
            </span>
          </header>
          <div className="flex flex-col">
            {/* C O R R E O  I N P U T */}

            <label className="font-semibold text-[15px]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Micorreo@gmail.com..."
              className="border p-2 border-gray-400 rounded mt-2 placeholder:text-[14px]"
            />
          </div>

          {/* P A S S W O R D  I N P U T */}

          <div className="flex flex-col">
            <label className="font-semibold text-[15px]" htmlFor="password">
              Contraseña
            </label>
            <div className="relative flex flex-row items-center">
              <input
                id="password"
                type={show ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="••••••••"
                className="border p-2 pr-16 border-gray-400 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[14px]"
              />
              {passwordContent && passwordContent.length > 0 ? (
                <span
                  onClick={() => setShow(!show)}
                  className="absolute cursor-pointer right-2 text-xs font-light text-gray-500 hover:text-[#00754a]"
                >
                  {show ? <FaRegEye size={17} /> : <FaRegEyeSlash size={17} />}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* S U B M I T  B U T T O N */}

          <div className="py-3 text-center">
            <button
              type="submit"
              className="bg-[#1e3932] p-2 rounded-[50px] cursor-pointer"
            >
              <span className="text-[16px] uppercase font-bold text-white">
                Iniciar sesión
              </span>
            </button>
          </div>

          <div className="text-center">
            <span className="font-light">¿Aún no tenes cuenta? </span>
            <Link to={"/registrarse"} className="text-blue-500 underline">
              Registrate
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
