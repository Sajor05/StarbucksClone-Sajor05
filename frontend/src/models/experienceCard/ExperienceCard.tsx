import "./ExperienceCard.css";
import { Link } from "react-router-dom";
import type { ExperienceCardProps } from "../../interface/Interface";

export const ExperienceCard = ({
  title,
  image,
  text,
  isReversed,
}: ExperienceCardProps) => {
  const isDelivery = title === "Delivery";

  return (
    <div className="flex flex-col w-full h-auto lg:flex-row lg:w-300 lg:h-87.5">
      <div
        className={`flex flex-col w-full px-8 py-8 gap-6 bg-[#f1ece8] lg:w-150 
        ${isReversed ? "lg:order-last" : ""}`}
      >
        <div className="text-center">
          <h2 className="text-[30px] font-semibold">{title}</h2>
        </div>

        <div className="w-full text-center lg:ml-7 lg:w-[471.44px]">
          <span className="font-semibold text-[19px]">{text}</span>
        </div>

        {isDelivery ? (
          <div className="text-center flex justify-center">
            <Link
              to={"https://www.pedidosya.com.ar/cadenas/starbucks"}
              className="button mt-5 w-33.5 h-8 flex items-center justify-center"
            >
              <span className="font-semibold">Pedí Delivery</span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="w-full lg:w-150">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover lg:w-150 lg:h-87.5"
        />
      </div>
    </div>
  );
};
