import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { FooterProps } from "../../interface/Interface";

export const Footer = () => {
  return (
    <footer className="footer mt-10 w-full border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-20">
          <div className="flex flex-col md:flex-row md:gap-20 w-full">
            <FooterSection title="Sobre nosotros">
              <Link to="/seccion/nuestra-historia">Nuestra historia</Link>
              <Link to="/">Nuestra misión</Link>
              <Link to="/">Nuestra cultura inclusiva y valores</Link>
              <Link to="/articulo/lets-talk-coffee">Nuestro café</Link>
              <Link to="https://historias.starbucks.com/...">
                Historias y novedades
              </Link>
              <Link to="https://app.genoma.work/jobs/sbx-ar">
                Trabajá con nosotros
              </Link>
              <Link to="/">Comunicados oficiales</Link>
            </FooterSection>

            <FooterSection title="Impacto social">
              <Link to="/">Planeta</Link>
              <Link to="/">Personas</Link>
            </FooterSection>

            <FooterSection title="Atención al cliente">
              <Link to="/articulo/contacto">Contacto</Link>
              <Link to="/articulo/medios-de-pago">Medios de pago</Link>
              <Link to="https://autogestion.produccion.gob.ar/...">
                Defensa del consumidor
              </Link>
            </FooterSection>

            <FooterSection title="Experiencia Starbucks">
              <Link to="/seccion/experiencia-starbucks">Formas de comprar</Link>
              <Link to="https://www.pedidosya.com.ar/...">Delivery</Link>
            </FooterSection>
          </div>

          <div className="mt-8 md:mt-0">
            <Link to="http://qr.afip.gob.ar/?qr=mXre0uzPRZp2FyKAW3LfRQ,,">
              <img
                src="https://www.starbucks.com.ar/static/images/footer-argentina.jpg"
                alt="Data Fiscal"
                className="w-[65px] h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, children }: FooterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 md:border-none py-4 md:py-0 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-semibold text-lg md:mb-6"
      >
        <span>{title}</span>
        <svg
          className={`h-5 w-5 transition-transform md:hidden ${isOpen ? "rotate-360" : "rotate-270"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`
        flex flex-col gap-4 mt-4 font-semibold text-gray-400
        ${isOpen ? "block" : "hidden"} 
        md:flex
      `}
      >
        {React.Children.map(children, (child) => (
          <span className="transition-colors hover:text-black">{child}</span>
        ))}
      </div>
    </div>
  );
};
