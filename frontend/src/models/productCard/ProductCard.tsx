import { Link } from "react-router-dom";
import type { ProductCardProps } from "../../interface/Interface";

export function ProductCard({ data, isCategoryMenu }: ProductCardProps) {
  return (
    <Link
      to={isCategoryMenu ? `/item/${data.title}` : `/menu/${data.title}`}
      className="mt-7"
    >
      <div className="flex justify-center">
        <img
          src={data.image}
          alt={data.title}
          className="rounded-full bg-[#1e3932]"
        />
      </div>
      <div className="text-center">
        <span className="text-[18px] font-bold">{data.title}</span>
      </div>
    </Link>
  );
}
