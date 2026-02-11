import Product from "../models/product_model.js";
import type { Request, Response } from "express";
import Categories from "../models/category_model.js";
/*-------------------
-- P R O D U C T S --
-------------------*/

//Getter
export async function getProducts(req: Request, res: Response) {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
}

/*-----------------------
-- C A T E G O R I E S --
-----------------------*/

export async function getCategories(req: Request, res: Response) {
  try {
    const allCategories = (await Categories.find()).reverse();
    res.status(200).json(allCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las categorias" });
  }
}
