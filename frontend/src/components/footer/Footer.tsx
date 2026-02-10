import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer h-116 mt-10 flex justify-center">
      <div className="footer-container">
        <div className="footer-links-region">
          <div className="footer-row-container flex flex-row gap-70">
            <FooterLinks />
            <div>
              <a href="http://qr.afip.gob.ar/?qr=mXre0uzPRZp2FyKAW3LfRQ,,">
                <img
                  src="https://www.starbucks.com.ar/static/images/footer-argentina.jpg"
                  alt="Data Fiscal"
                  className="w-[64.98px] h-[88.92px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = () => {
  return (
    <section className="flex flex-row text-justify gap-20">
      <AboutUs />
      <SocialImpact />
      <Client />
      <Experience />
    </section>
  );
};

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-9 font-semibold">
      <header>Sobre nosotros</header>
      <div className="flex flex-col gap-5 text-gray-400">
        <Link to={"/seccion/nuestra-historia"}>
          <span className="hover:text-black">Nuestra historia</span>
        </Link>
        <Link to={""}>
          <span className="hover:text-black">Nuestra misión</span>
        </Link>
        <Link to={""}>
          <span className="hover:text-black">
            Nuestra cultura inclusiva<span className="block">y valores</span>
          </span>
        </Link>
        <Link to={"/articulo/lets-talk-coffee"}>
          <span className="hover:text-black">Nuestro café</span>
        </Link>
        <Link
          to={
            "https://historias.starbucks.com/stories/2018/escuchando-a-la-tierra-creando-el-centro-de-visitantes-starbucks-en-la-hacienda-alsacia/"
          }
        >
          <span className="hover:text-black">Historias y novedades</span>
        </Link>
        <Link to={"https://app.genoma.work/jobs/sbx-ar"}>
          <span className="hover:text-black">Trabajá con nosotros</span>
        </Link>
        <Link to={""}>
          <span className="hover:text-black">Comunicados oficiales</span>
        </Link>
      </div>
    </div>
  );
};

const SocialImpact = () => {
  return (
    <div className="flex flex-col gap-9 font-semibold">
      <header>Impacto social</header>
      <div className="flex flex-col gap-5 text-gray-400">
        <Link to={""}>
          <span className="hover:text-black">Planeta</span>
        </Link>
        <Link to={""}>
          <span className="hover:text-black">Personas</span>
        </Link>
      </div>
    </div>
  );
};

const Client = () => {
  return (
    <div className="flex flex-col gap-9 font-semibold">
      <header>Atención al cliente</header>
      <div className="flex flex-col gap-5 text-gray-400">
        <Link to={"/articulo/contacto"}>
          <span className="hover:text-black">Contacto</span>
        </Link>
        <Link to={"/articulo/medios-de-pago"}>
          <span className="hover:text-black">Medios de pago</span>
        </Link>
        <Link to={"https://autogestion.produccion.gob.ar/consumidores"}>
          <span className="hover:text-black">
            Defensa de las y los<span className="block">consumidores</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-3 font-semibold">
      <header>
        Experiencia<span className="block">Starbucks</span>
      </header>
      <div className="flex flex-col gap-5 text-gray-400">
        <Link to={"/seccion/experiencia-starbucks"}>
          <span className="hover:text-black">Formas de comprar</span>
        </Link>
        <Link to={"https://www.pedidosya.com.ar/cadenas/starbucks"}>
          <span className="hover:text-black">Delivery</span>
        </Link>
      </div>
    </div>
  );
};
