import { Title } from "../../models/Title"
import { Navbar } from "../../components/navbar/Navbar"
import { Footer } from "../../components/footer/Footer"

export const Contact = () => {
  return (
    <>
        <Navbar/>
        <Title text={"Contacto"}/>
        <main className="flex flex-col gap-9 px-160 mt-5 text-[#000000DE] text-[20px] font-light">
            <header>Contactamos por los siguientes canales:</header>
            <div>
                <span className="font-semibold">Por mail: </span>
                <span>info@starbucks.com.ar</span>
            </div>
            <div>
                <span className="font-semibold">Por telefono: </span>
                <span>0800-122-0129</span>
            </div>
        </main>
        <Footer/>
    </>
  )
}
