import axios from "axios";
import { useState, useEffect } from "react";
import type { MenuSection } from "../interface/Interface";

export function useCategories() {
  const [categories, setCategories] = useState<MenuSection[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://starbucksclone-sajor05.onrender.com/api/categories",
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return categories;
}
