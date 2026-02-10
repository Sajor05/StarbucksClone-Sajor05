import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { Navbar } from "../../navbar/Navbar";
import { Footer } from "../../footer/Footer";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export function LoginForm() {
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    address: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { signin, loginWithGoogle } = useAuth();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  /*
  const handleGoogleSubmit = async () => {
    await loginWithGoogle();
    navigate("/");
  };
 */
  return (
    <div>
      <Navbar />
      <div className="pt-5 flex justify-center">
        <form
          onSubmit={handleSubmit}
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
              name="email"
              value={user.email}
              placeholder="Micorreo@gmail.com..."
              className="border p-2 border-gray-400 rounded mt-2 placeholder:text-[14px]"
              onChange={handleChange}
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
                name="password"
                value={user.password}
                placeholder="••••••••"
                className="border p-2 pr-16 border-gray-400 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[14px]"
                onChange={handleChange}
              />
              {user.password.length > 0 ? (
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

/*
No pude hacerlo funcionar, me tiraba error de email invalido aunque tenia activada la opcion de relacionar cuentas con un mismo correo,
si es posible, en la correcion poder decirme como solucionar el problema


          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>

              <span className="px-3 text-gray-500 text-sm uppercase">o</span>

              <div className="flex-1 border-t border-gray-300"></div>
            </div>
         
             S U B M I T  G O O G L E  B U T T O N 

            
            <button
              onClick={() => handleGoogleSubmit()}
              className="p-2 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-100"
            >
              <span className="font-medium">Iniciar sesión con Google</span>
            </button>
          </div>
*/
