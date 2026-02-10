import axios from "axios";
import { useState, useEffect } from "react";
import type { Product } from "../interface/Interface";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Product[]>(
          "https://starbucksclone-sajor05.onrender.com/api/products",
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return products;
}
