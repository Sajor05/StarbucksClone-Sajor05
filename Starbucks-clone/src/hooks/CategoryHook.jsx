import { useEffect, useState } from "react"
import { getCategories } from "../db/fireBase.js"

export function useCategories() {
  const[categories, setCategories] = useState([])
  useEffect(() => {
    const fetchData = async() => {
        try {
            const res = await getCategories()
            setCategories(res)
        } catch (error) {
            console.log(error)
        }
    }; fetchData()
  },[])
  return (categories)
}