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
    <div className="grid grid-cols-1 lg:grid-cols-2 w-350 h-102 text-center">
      <section
        className={`homeContainer-image w-176 ${isReversed ? "order-last" : ""}`}
        style={isReversed ? { backgroundColor: `${backgroundcolor}` } : {}}
      >
        <img src={image} alt={text} />
      </section>
      <section
        className="homeContainer-text"
        style={{ backgroundColor: `${backgroundcolor}` }}
      >
        <div className="text-container w-108.25 h-38.75 m-30">
          <h1
            className={"text-[48px] font-bold"}
            style={{ color: `${textcolor}` }}
          >
            {text}
          </h1>
          {isReversed ? (
            <span
              className={`mt-4 text-[19px] font-semibold`}
              style={isReversed ? { color: `${textcolor}` } : {}}
            >
              Revisa las oportunidades que tenemos para vos
            </span>
          ) : (
            ""
          )}
          {isReversed ? (
            <Link
              to={"https://app.genoma.work/jobs/sbx-ar"}
              className={`submit-button mt-4`}
              style={isReversed ? { color: `${textcolor}` } : {}}
            >
              Postular acá
            </Link>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
};
