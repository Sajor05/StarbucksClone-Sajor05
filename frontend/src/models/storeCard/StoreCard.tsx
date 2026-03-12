import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Link } from "react-router-dom";
import { LuClock4 } from "react-icons/lu";
import timezone from "dayjs/plugin/timezone";
import { CiCircleInfo } from "react-icons/ci";
import { LiaBicycleSolid } from "react-icons/lia";
import { FaPersonChalkboard } from "react-icons/fa6";
import type {
  IStore,
  IHeaderStoreCardProps,
  IScheduleProps,
  IShopServiceProps,
} from "../../interface/Interface";

dayjs.extend(utc);
dayjs.extend(timezone);

export const StoreCard = (store: IStore) => {
  return (
    <>
      <hr className="text-gray-200 my-5" />
      <Link to={""}>
        <article>
          <HeaderStoreCard name={store.name} address={store.address} />
          <Schedule opening={store.opening} closure={store.closure} />
          <ShopServices delivery={store.isDelivery} />
        </article>
      </Link>
    </>
  );
};

const HeaderStoreCard = ({ name, address }: IHeaderStoreCardProps) => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[14px]">{name}</h1>
        <CiCircleInfo size={19} color="#00000094" />
      </div>
      <span>{address}</span>
    </header>
  );
};

const ShopServices = ({ delivery }: IShopServiceProps) => {
  return (
    <div className="flex flex-row">
      <div className="w-11 h-11 flex flex-col justify-center text-[#00000094]">
        <FaPersonChalkboard className="relative left-3.5" />
        <span className="text-[13px]">Pickup</span>
      </div>
      {delivery ? <DeliveryService /> : ""}
    </div>
  );
};

const DeliveryService = () => {
  return (
    <div className="w-11 h-11 flex flex-col justify-center text-[#00000094]">
      <LiaBicycleSolid className="relative left-3.5" />
      <span className="text-[13px]">Delivery</span>
    </div>
  );
};

function Schedule({ opening, closure }: IScheduleProps) {
  const currentHour = dayjs().tz("America/Argentina/Buenos_Aires").hour();
  const isOpen = currentHour >= opening && currentHour < closure;
  return (
    <div className="flex flex-row gap-2.5 items-center">
      <div className="flex items-center gap-1.5">
        <LuClock4 color="#00000094" />
        <span className="font-light text-[#00000094]">
          {opening} HS a {closure} HS
        </span>
      </div>

      {isOpen ? <OpenState /> : <CloseState />}
    </div>
  );
}

const OpenState = () => {
  return (
    <div className="bg-[#D4E9E2] rounded-full p-2 uppercase text-center">
      <span className="text-[#006242] text-[14px]">abierto</span>
    </div>
  );
};

const CloseState = () => {
  return (
    <div className="bg-[#D5003210] rounded-full p-2 uppercase text-center">
      <span className="text-[#D50032] text-[14px]">cerrado</span>
    </div>
  );
};
