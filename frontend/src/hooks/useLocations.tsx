import axios from "axios";
import { useState, useEffect } from "react";
import type { IStore } from "../interface/Interface.ts";

export function useLocations() {
  const [locations, setLocations] = useState<IStore[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://starbucksclone-sajor05.onrender.com/api/stores",
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
