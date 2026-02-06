import type { TextProp } from "../../interface/Interface";

export const Title = ({ text }: TextProp) => {
  return (
    // Reduje el py-20 a py-10 en móviles para que no ocupe tanta pantalla verticalmente
    <header className="py-10 md:py-16 lg:py-20 bg-[#1e3932]">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1400px] mx-auto">
        {/* CAMBIOS EN TEXTO:
           1. text-[32px] (móvil): Tamaño legible sin romper palabras.
           2. md:text-[40px] (tablet): Un poco más grande.
           3. lg:text-[50px] (desktop): Tu tamaño original.
           4. break-words: Evita que nombres largos rompan el diseño en celular.
        */}
        <span className="title text-[32px] md:text-[40px] lg:text-[50px] font-bold text-white break-words block">
          {text}
        </span>
      </div>
    </header>
  );
};
