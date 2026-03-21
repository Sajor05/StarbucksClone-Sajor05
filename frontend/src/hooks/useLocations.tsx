import axios from "axios";
import { useState, useEffect } from "react";
import type { IStore } from "../interface/Interface";

export function useLocations() {
  const [locations, setLocations] = useState<IStore[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<IStore[]>(
          "https://starbucks-clone-backend.vercel.app/api/stores",
        );
        setLocations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return locations;
}
