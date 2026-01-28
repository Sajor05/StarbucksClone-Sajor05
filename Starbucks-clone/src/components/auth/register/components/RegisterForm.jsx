import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../../context/AuthContext";

export function RegisterForm() {

  const[error, setError] = useState(null)
  const[user, setUser] = useState({
    email : "",
    address : "",
    username : "",
    password : ""
  });
  const navigate = useNavigate()
  const {signup} = useAuth()

  const handleChange = ({target : {name, value}}) => {
    setUser({...user, [name]:value})
  }

  const handleSubmit = async (e) => {
    try {
        e.preventDefault()
        await signup(user.email, user.address, user.username, user.password)
        navigate("/")
    } catch (error) {
        setError(error.message)
    }
  }

  return (
    <div className="flex flex-col justify-center">
        <Title/>
        <div className="pt-5 flex justify-center">
           <form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-gray-400 py-5 px-8 w-100 rounded-lg">
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
                    <label htmlFor="address">Dirección</label>
                    <input
                        id="address"
                        type="text" 
                        name="address"
                        value={user.address} 
                        placeholder="una dirección 123, ciudad..." 
                        className="border p-1 border-gray-400 rounded mt-2"
                        onChange={handleChange} 
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="username">Nombre</label>
                    <input 
                        id="username"
                        type="text" 
                        name="username"
                        value={user.username} 
                        placeholder="miNombre..." 
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
                    {error && <span className="text-[12px] text-red-600">La contraseña tiene que tener al menos 6 caracteres</span>}                 
                </div>
                <div className="py-7">
                    <button type="submit" className="bg-[#1e3932] p-2 rounded-[50px] cursor-pointer">
                        <span className="text-[16px] uppercase font-bold text-white">Registrarme</span>
                    </button>
                </div>
            </form> 
        </div>
        
    </div>
    
  )
}

const Title = () => {
    return(
        <header className="py-20 text-center bg-[#1e3932]">
            <div className="px-155">
                <span className="title text-[50px] font-bold text-white">Registrarse</span>
            </div>
        </header>
    )
}