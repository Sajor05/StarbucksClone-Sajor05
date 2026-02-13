import "./BlockCard.css";
import { Link } from "react-router-dom";
import type { BlockCardProps } from "../../interface/Interface";

export const BlockCard = ({
  image,
  text,
  textcolor,
  backgroundcolor,
  isReversed,
}: BlockCardProps) => {
  return (
    <div className="text-center grid grid-cols-1 lg:grid-cols-2 w-full h-auto lg:w-350 lg:h-102">
      <section
        className={`w-full h-64 lg:h-full flex justify-center items-center lg:w-176 
        ${isReversed ? "lg:order-last" : ""}`}
        style={isReversed ? { backgroundColor: `${backgroundcolor}` } : {}}
      >
        <img src={image} alt={text} className="w-full h-full object-cover" />
      </section>

      <section
        className="homeContainer-text w-full flex flex-col justify-center items-center"
        style={{ backgroundColor: `${backgroundcolor}` }}
      >
        <div className="text-container w-full px-6 py-8 lg:px-0 lg:py-0 lg:w-108.25 lg:h-38.75 lg:m-30">
          <h1
            className="text-3xl lg:text-[48px] font-bold"
            style={{ color: `${textcolor}` }}
          >
            {text}
          </h1>

          {isReversed && (
            <span
              className="block mt-4 text-lg lg:text-[19px] font-semibold"
              style={{ color: `${textcolor}` }}
            >
              Revisa las oportunidades que tenemos para vos
            </span>
          )}

          {isReversed && (
            <Link
              to={"https://app.genoma.work/jobs/sbx-ar"}
              className="submit-button mt-6 inline-block"
              style={{ color: `${textcolor}` }}
            >
              Postular acá
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};
