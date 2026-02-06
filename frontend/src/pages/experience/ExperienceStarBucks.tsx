import { Title } from "../../models/titleCard/Title";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import { ExperienceCard } from "../../models/experienceCard/ExperienceCard";

export const ExperienceStarBucks = () => {
  usePageTitle("Experiencia Starbucks | Starbucks");
  return (
    <>
      <Navbar />
      <div>
        <Title text={"Experiencia Starbucks"} />
        <div className="flex justify-center items-center p-18">
          <h2 className="text-center text-[#1e3932] text-[30px] font-bold">
            Para cada momento hay una forma de vivir la
            <span className="block">
              Experiencia Starbucks como vos quieras.
            </span>
          </h2>
        </div>

        <main className="flex justify-center">
          <div className="flex flex-col gap-8">
            <ExperienceCard
              title="In store"
              image="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67487_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
              text="En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable."
              isReversed={false}
            />
            <ExperienceCard
              title="Drive Thru"
              image="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67488_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
              text="Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto."
              isReversed={true}
            />
            <ExperienceCard
              title="Delivery"
              image="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67485_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
              text="Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya."
              isReversed={true}
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
