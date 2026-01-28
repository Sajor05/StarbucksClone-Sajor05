import { Footer } from "../../components/footer/Footer"
import { Navbar } from "../../components/navbar/Navbar"
import { ExperienceContainer } from "./components/ExperienceContainer"

export const ExperienceStarBucks = () => {
  return (
    <>
        <Navbar/>
        <div>
            <Title/>
            <main>
                <ExperienceContainer/>
            </main>
        </div>
        <Footer/>
    </>
  )
}

const Title = () => {
    return(
    <>
        <header className="h-35 pt-5 pb-8 bg-[#1e3932]">
            <div className="px-155 w-450 py-3 text-center ml-14">
                <span className="title text-[50px] font-bold text-white">Experiencia Starbucks</span>
            </div>
        </header>
        <div className="flex justify-center my-13">
            <div className="w-225 h-[177] text-center">
                <h2 className="text-[#1e3932] text-[30px] font-bold">Para cada momento hay una forma de vivir la <span className="block">Experiencia Starbucks como vos quieras.</span></h2>
            </div> 
        </div>
    </>

    )
}