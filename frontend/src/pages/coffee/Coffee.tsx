import "./Coffee.css";
import { Title } from "../../models/titleCard/Title";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import type { ToastTypeProp } from "../../interface/Interface";

export const Coffee = () => {
  usePageTitle("Let´s talk coffee");
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div>
        <Title text={"Nuestro café"} />
        <main className="main-container flex flex-col gap-8 text-[20px] text-[#000000DE] min-sm:mx-25 font-light lg:mx-150">
          <div className="our-coffee mt-10">
            <p>
              El olor al café, a unos granos recién tostados, es la mejor
              bienvenida que cada día planificamos para brindarles cuando
              abrimos las puertas de nuestras tiendas. Pero eso es sólo el
              comienzo.
            </p>

            <img
              src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FNuestro%20Caf%C3%A9.png?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max"
              alt="Café corazon"
              className="my-8"
            />

            <p>
              De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte
              presencia de chocolate…el desafío que tenemos constantemente es
              que cada uno de nuestros clientes encuentre su mezcla favorita y a
              la vez, que explore nuestras amplias selecciones más
              singulares.{" "}
            </p>
            <p>
              Para alcanzarlo nos abastecemos de los mejores granos de café
              arábicos siguiendo siempre estrictos principios éticos.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[30px] text-black mb-10">
              Nuestro tostado Starbucks
            </h2>
            <p>
              Cada café que ofrecemos exige un perfil de tostado único para
              crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al
              trabajar en un delicado balance en calor, tiempo y arte, nuestros
              maestros en el tostado hacen resaltar estas únicas características
              de cada grano de café.{" "}
            </p>
            <img
              src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2Fcurva.jpg?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max"
              alt="Curva del café tostado"
              className="my-8"
            />
          </div>
          <ToastType
            type={"Rubio"}
            text={
              "El café Starbucks tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves."
            }
          />
          <ToastType
            type={"Medio"}
            text={
              "El café con tostado medio es balanceado con sabores agradables y enriquecidos."
            }
          />
          <ToastType
            type={"Oscuro"}
            text={
              "Los cafés con tostado oscuro presentan un cuerpo completo y sabores fuertes y robustos."
            }
          />
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-[30px] text-black">
              Descubre los métodos de preparación en{" "}
              <span className="block">
                Starbucks, ¿Cuál es el correcto para vos?
              </span>
            </h2>

            <p>
              Desde el cultivo responsable hasta el tostado, cada detalle en la
              elaboración de manera artesanal es fundamental para poder
              disfrutar de una taza de café Starbucks. Y además de la esencia de
              los granos, sabemos que la forma en la que se prepara el café
              tiene un efecto sorprendente en el sabor de cada taza y define su
              cuerpo.
            </p>

            <img
              src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMetodos.png?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max"
              alt="Metodos de preparación Starbucks"
              className="my-8"
            />

            <p>
              Es por eso que nuestros magníficos baristas se enfocan en crear
              diariamente rituales escogiendo diferentes métodos de preparación
              para que sean nuestros clientes quienes se sorprenden. Así, de la
              mano de las explicaciones de nuestros expertos, no sólo cultivarán
              la curiosidad sino que podrán seleccionar el mejor método para su
              experiencia Starbucks.
            </p>

            <a
              href="https://historias.starbucks.com/es/stories/2020/descubre-los-metodos-de-preparacion-en-starbucks-cual-es-el-correcto-para-ti/"
              className="button mt-5 w-65"
            >
              <span className="font-bold text-[18px]">
                Conocé nuestros métodos
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

const ToastType = ({ type, text }: ToastTypeProp) => {
  return (
    <div>
      <h2 className="font-bold text-[23.364px] text-black mb-5">{type}</h2>
      <p>{text}</p>
    </div>
  );
};
