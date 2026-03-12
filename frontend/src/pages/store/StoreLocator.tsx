import Map, { Marker } from "react-map-gl/mapbox";
import { Navbar } from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useLocations } from "../../hooks/useLocations";
import { StoreCard } from "../../models/storeCard/StoreCard";

const storeLocations = useLocations();

export function StoreLocator() {
  usePageTitle("Tiendas | Starbucks");
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 grid grid-cols-[770px_1fr] w-full">
        <MapList />
        <MapStores />
      </main>
    </div>
  );
}

const MapList = () => {
  return (
    <div className="p-6 bg-white overflow-y-auto shadow-lg z-10">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar Tienda"
          className="w-full border-b border-gray-300 pb-2 outline-none"
        />
      </div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Sucursales</h2>
      {storeLocations.map((shop, i) => (
        <StoreCard {...shop} key={i} />
      ))}
    </div>
  );
};

const MapStores = () => {
  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
  return (
    <div className="w-full h-full relative">
      <Map
        initialViewState={{
          longitude: -58.3816,
          latitude: -34.6037,
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
