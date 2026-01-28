import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navbar/Navbar";
import { LoginForm } from "./components/LoginForm";

export function LoginPage() {
  return (
    <>
        <Navbar/>
        <LoginForm/>
        <Footer/>
    </>
  )
}
