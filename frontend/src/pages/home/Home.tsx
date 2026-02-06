import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { BlockCard } from "../../models/blockCard/BlockCard";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="h-266">
        <div className="flex justify-center">
          <BlockCard
            image="https://djftrby1k8irl.cloudfront.net/s3fs-public/2026-01%2Fbanner%202%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
            text="¡Pistacho regresa a Starbucks!"
            textcolor="#fff"
            backgroundcolor="#00754a"
          />
        </div>
        <div className="mt-15 flex justify-center">
          <BlockCard
            image="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2F5%20Banner%20Reclutamiento%20704x600%20copy_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
            text="Unite a algo más grande"
            textcolor="#00754a"
            backgroundcolor="#d8ebe5"
            isReversed={true}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};
