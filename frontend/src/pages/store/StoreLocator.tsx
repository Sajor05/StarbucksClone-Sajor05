import { VscSettings } from "react-icons/vsc";
import Map, { Marker } from "react-map-gl/mapbox";
import { Navbar } from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useLocations } from "../../hooks/useLocations";
import { StoreCard } from "../../models/storeCard/StoreCard";

export function StoreLocator() {
  usePageTitle("Tiendas | Starbucks");
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 grid grid-cols-[770px_1fr] w-full overflow-hidden">
        <MapList />
        <MapStores />
      </main>
    </div>
  );
}

const MapList = () => {
  const storeLocations = useLocations();
  return (
    <div className="p-6 bg-white shadow-lg flex flex-col h-full overflow-hidden">
      <div className="mb-6 flex items-center gap-8">
        <input
          type="text"
          placeholder="Buscar Tienda"
          className="w-full border-b border-gray-300 pb-2 outline-none"
        />
        <a href="">
          <VscSettings size={25} color="#00000094" className="mt-2" />
        </a>
      </div>
      <div className="flex-1 overflow-y-auto pr-6">
        {storeLocations.map((shop, i) => (
          <StoreCard {...shop} key={i} />
        ))}
      </div>
    </div>
  );
};

const MapStores = () => {
  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
  const storeLocations = useLocations();
  return (
    <div className="w-full h-full relative">
      <Map
        initialViewState={{
          longitude: -58.3816,
          latitude: -34.6037,
          zoom: 10,
        }}
        style={{ width: "100%", height: "100%" }}
        cursor="auto"
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {storeLocations.map((store, k) => (
          <Marker
            key={k}
            longitude={store.lng}
            latitude={store.lat}
            color="#00704A"
          />
        ))}
      </Map>
    </div>
  );
};
