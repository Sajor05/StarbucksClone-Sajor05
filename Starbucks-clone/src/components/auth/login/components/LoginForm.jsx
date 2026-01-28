import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

export function LoginForm() {

  const[error, setError] = useState(null)
  const[user, setUser] = useState({
    email : "",
    address : "",
    username : "",
    password : ""
  });
  const navigate = useNavigate()
  const {signin} = useAuth()

  const handleChange = ({target : {name, value}}) => {
    setUser({...user, [name]:value})
  }

  const handleSubmit = async (e) => {
    try {
        e.preventDefault()
        await signin(user.email, user.password)
        navigate("/")
    } catch (error) {
        setError(error.message)
    }
  }

  return (
    <div className="flex flex-col justify-center bg-[#1e3932]">
        <div className="pt-5 flex justify-center">
           <form onSubmit={handleSubmit} className="bg-white flex flex-col gap-5 border border-gray-400 py-5 px-8 w-100 rounded-lg">
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        value={user.email} 
                        placeholder="unemail@gmail.com..." 
                        className="border p-1 border-gray-400 rounded mt-2"
                        onChange={handleChange} 
                    /> 
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        id="password"
                        type="password" 
                        name="password"
                        value={user.password}
                        placeholder="una dirección 123, ciudad..." 
                        className="border p-1 border-gray-400 rounded mt-2"
                        onChange={handleChange} 
                    />              
                </div>
                <div className="py-7 text-center">
                    <button type="submit" className="bg-[#1e3932] p-2 rounded-[50px] cursor-pointer">
                        <span className="text-[16px] uppercase font-bold text-white">Iniciar sesión</span>
                    </button>
                </div>
                <Link to={"/registrarse"}>¿Aún no tenes cuenta? <span className="text-blue-500 underline">Registrate</span></Link>
            </form> 
        </div>
        
    </div>
    
  )
}
