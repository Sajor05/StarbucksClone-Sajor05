import './App.css'
import { Home } from './pages/home/Home'
import { Profile } from './client/Profile'
import { Coffee } from './pages/coffee/Coffee'
import { Payment } from './pages/payment/Payment'
import { Contact } from './pages/contact/Contact'
import { AuthProvider } from './context/AuthContext'
import { LoginPage } from './components/auth/login/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HandleProducts } from './pages/handleProducts/HandleProducts'
import { RegisterPage } from './components/auth/register/RegisterPage'
import { ExperienceStarBucks } from './pages/experience/ExperienceStarBucks'
import { ItemListContainer } from './models/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './models/itemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<HandleProducts/>} />
          <Route path='/menu' element={<ItemListContainer/>} />
          <Route path='/perfil/:username' element={<Profile/>}/>
          <Route path='/articulo/contacto' element={<Contact/>}/>
          <Route path='/registrarse' element={<RegisterPage/>} />
          <Route path='/iniciar-sesion' element={<LoginPage/>} />
          <Route path='/menu/:title' element={<ItemListContainer/>} />
          <Route path='/articulo/medios-de-pago' element={<Payment/>}/>
          <Route path='/item/:title' element={<ItemDetailContainer/>} />
          <Route path='/articulo/lets-talk-coffee' element={<Coffee/>} />
          <Route path='/producto/:title' element={<ItemListContainer/>} />
          <Route path='/seccion/experiencia-starbucks' element={<ExperienceStarBucks/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
