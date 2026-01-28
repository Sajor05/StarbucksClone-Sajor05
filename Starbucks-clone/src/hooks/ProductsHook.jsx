import { getProducts } from "../db/fireBase";
import { useEffect, useState } from "react"

export function useProducts() {
  const [products, setProducts] = useState([])
  useEffect( () => {
    const fetchData = async () => {
        try {
            const res = await getProducts()
            setProducts(res)
        } catch (error) {
            console.log(error)
        }
    }; fetchData()
  },[])
  return (products);
}