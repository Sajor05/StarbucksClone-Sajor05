import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import type { User } from "../../../interface/Interface";

export function RegisterForm() {
  /*-------------
  -- H O O K S --
  -------------*/
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();
  const [show, setShow] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<User>();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  /*---------------------
  -- F U N C T I O N S --
  ---------------------*/

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  const passwordContent = watch("password");

  return (
    <>
      <Navbar />
      <div className="pt-5 flex justify-center">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 border border-gray-400 py-5 px-8 w-100 rounded-lg"
        >
          <header className="text-center flex flex-col">
            <div className="p-5 flex justify-center items-center">
              <img
                src="https://www.starbucks.com.ar/static/images/logo.svg"
                alt="Sturbucks logo"
              />
            </div>
            <hr className="text-gray-300 pb-3" />
            <span className="text-[23px] font-semibold">¡Bienvenido!</span>
            <span className="font-light text-[14px] mt-1">
              Porfavor crea un usuario para iniciar nuestra aventura
            </span>
          </header>

          {/* C O R R E O  I N P U T */}

          <div className="flex flex-col">
            <label className="font-semibold text-[15px]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="unemail@gmail.com..."
              {...register("email", { required: true })}
              className="border p-1 border-gray-400 rounded mt-2 placeholder:text-[14px]"
            />
          </div>

          {/* A D D R E S S  I N P U T */}

          <div className="flex flex-col">
            <label className="font-semibold text-[15px]" htmlFor="address">
              Dirección
            </label>
            <input
              id="address"
              type="text"
              placeholder="una dirección 123, ciudad..."
              {...register("address", { required: true })}
              className="border p-1 border-gray-400 rounded mt-2 placeholder:text-[14px]"
            />
          </div>

          {/* U S E R N A M E  I N P U T */}

          <div className="flex flex-col">
            <label className="font-semibold text-[15px]" htmlFor="username">
              Nombre
            </label>
            <input
              id="username"
              type="text"
              placeholder="Mi Nombre..."
              {...register("username", { required: true })}
              className="border p-1 border-gray-400 rounded mt-2 placeholder:text-[14px]"
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

          <div className="py-7 text-center">
            <button
              type="submit"
              className="bg-[#1e3932] p-2 rounded-[50px] cursor-pointer"
            >
              <span className="text-[16px] uppercase font-bold text-white">
                Registrarme
              </span>
            </button>
          </div>
          <div className="text-center">
            <Link to={"/iniciar-sesion"}>
              ¿Ya tenes cuenta?{" "}
              <span className="text-blue-500 underline">Inicia sesión</span>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
