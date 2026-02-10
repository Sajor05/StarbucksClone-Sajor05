import './App.css'
import { Home } from './pages/home/Home'
import { Profile } from './client/Profile'
import { Coffee } from './pages/coffee/Coffee'
import { Payment } from './pages/payment/Payment'
import { Contact } from './pages/contact/Contact'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { LoginForm } from './components/auth/login/LoginForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HandleProducts } from './pages/handleProducts/HandleProducts'
import { RegisterForm } from './components/auth/register/RegisterForm'
import { ExperienceStarBucks } from './pages/experience/ExperienceStarBucks'
import { ItemListContainer } from './pages/menu/Menu'
import { ItemDetailContainer } from './models/itemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/admin' element={<HandleProducts/>} />
            <Route path='/menu' element={<ItemListContainer/>} />
            <Route path='/perfil/:username' element={<Profile/>}/>
            <Route path='/articulo/contacto' element={<Contact/>}/>
            <Route path='/registrarse' element={<RegisterForm/>} />
            <Route path='/iniciar-sesion' element={<LoginForm/>} />
            <Route path='/menu/:title' element={<ItemListContainer/>} />
            <Route path='/articulo/medios-de-pago' element={<Payment/>}/>
            <Route path='/item/:title' element={<ItemDetailContainer/>} />
            <Route path='/articulo/lets-talk-coffee' element={<Coffee/>} />
            <Route path='/producto/:title' element={<ItemListContainer/>} />
            <Route path='/seccion/experiencia-starbucks' element={<ExperienceStarBucks/>} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
