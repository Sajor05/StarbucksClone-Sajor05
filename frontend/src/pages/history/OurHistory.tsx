import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import { Title } from "../../models/titleCard/Title";

export const OurHistory = () => {
  usePageTitle("Nuestra historia | Starbucks");
  return (
    <>
      <Navbar />
      <div className="text-center">
        <Title text="Nuestra historia" />
      </div>

      <main className="flex flex-col gap-20 text-center mt-15 text-[19px] font-semibold min-sm:mx-25 lg:mx-150">
        <div className="flex justify-center">
          <img
            src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FTienda%20Seattle_1.JPG?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max"
            alt="Pike Place Market"
          />
        </div>

        <p>
          Con la humedad de una calle empedrada; bajo de un cartel luminoso en
          el histórico Pike Place Market en la ciudad de Seattle, estado de
          Washington; con la calidez de una pequeña tienda y el perfume
          inigualable del unos granos de café recién tostados; y con un nombre
          inspirado en un clásico de la literatura como lo es la novela Moby
          Dick evocando a la tradición marítima de los primeros comerciantes;
          Starbucks abrió sus puertas, por primera vez, mientras los días
          sucedían en marzo de 1971.{" "}
        </p>

        <p>
          Esos primeros granos de café, entre una intensa variedad de tés y
          especias del mundo se encontraban en esas cuatro paredes para
          ofrecerle a cada cliente una invitación a llevarse parte de ese mundo
          -su mundo- a sus hogares. Y especialmente, compartirlo.{" "}
        </p>

        <p>
          De esa esencia fundante Starbucks cobró vida. Diez años después un
          joven llegado desde Nueva York, un tal Howard Schultz, se atrevió a
          entrar a esa tienda, tomar una taza de Sumatra y dejarse invadir por
          su intensidad y su imprevisible sabor. Ese instante cambió su destino.
          Un año después se uniría a la empresa y en 1983 un recorrido por
          cafeterías italianas lo inspiró para tomar un desafío mayor: llevar la
          calidez y el arte de la cultura italiana por el café al corazón
          estadounidense.
        </p>

        <p>
          Ese desafío cobró su esencia propia. En 1987 el color verde desplazó
          al marrón de los delantales para construir referencia para siempre.
          Pronto Starbucks se expandió por Chicago, Vancouver (Canadá),
          California, Washington y Nueva York. En 1996 cruzó el Pacífico y
          desembarcó primero en Japón, luego en Europa dos años después y en
          China en 1999. La conexión fue global.{" "}
        </p>

        <p>
          Durante dos décadas hasta hoy, Starbucks le dio -y le da- la
          bienvenida a sus clientes en sus miles de tiendas por todo el mundo.
          Es el principal tostador y minorista de especialidades de café del
          planeta y aquel joven neoyorkino aún hoy sigue construyendo la esencia
          de Starbucks.
        </p>

        <p>
          Esa misma en la que reside el verdadero valor, en el que se respira la
          herencia de ese aroma de los primeros granos de café tostados en
          Seattle. Se percibe la calidez de cada hogar en rincones del mundo
          conectados viviendo en comunidad. Y se hace realidad -con una taza de
          café- nuestra misión:{" "}
          <span className="italic">inspirar y nutrir el espíritu humano.</span>
        </p>
        <div className="flex flex-col gap-7 my-18">
          <p>Como desde 1971. </p>
          <p>Como cada día.</p>
        </div>

        <h2 className="text-[29px] font-bold">Nuestra historia en Argentina</h2>

        <p>
          Si hay una época en la que cualquier porteño disfruta de tomarse un
          buen café entre las callecitas de Buenos Aires o en algún barrio
          pintoresco, esa es sin dudas el invierno. En el país más austral del
          mundo, juntarse a tomar un café representa una tradición muy arraigada
          y forma parte de su tramado social cotidiano.
        </p>

        <p>
          Por eso, con el aire frío de un 30 de mayo de 2008, cuando Starbucks
          abrió su primera tienda en la Argentina, en el Alto Palermo Shopping,
          el desafío fue -y es- atrapante: conquistar desde la experiencia a una
          comunidad exquisita y habituada a disfrutar del café desde toda
          perspectiva posible.
        </p>

        <p>
          A 13 años de ese mayo, esa aventura continúa y diariamente 131 tiendas
          de Starbucks abren sus puertas cada mañana en todo el país. Con
          presencia en Buenos Aires, Rosario, Córdoba, Neuquén y Mendoza,
          actualmente más de 3.500 partners trabajan para que cada argentino
          disfrute de la personalización y la variedad de la experiencia
          Starbucks cuando se acerca a nuestras tiendas. Y esa es, al fin y al
          cabo, nuestra mayor satisfacción.
        </p>

        <div></div>
      </main>
      <Footer />
    </>
  );
};
