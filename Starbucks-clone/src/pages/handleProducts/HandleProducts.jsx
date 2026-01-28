import { setCategories } from "../../db/fireBase"
import { Navbar } from "../../components/navbar/Navbar"
import { Footer } from "../../components/footer/Footer"

export const HandleProducts = () => {
  return (
    <>
        <Navbar/>
        <div>
            <header className="p-10 bg-[#1e3932] text-center"><span className="text-[48px] font-bold text-white uppercase">Subir JSON</span></header>
            <div className="flex justify-center mt-20">
                <button className="cursor-pointer rounded-4xl w-30 bg-[#1e3932] text-white font-bold text-center p-2" onClick={setCategories}>Subir</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}