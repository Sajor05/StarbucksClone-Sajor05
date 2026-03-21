import Stores from "../models/shop_model.js";
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
    res.status(500).json({ message: "Error al obtener los productos" });
  }
}

//Setter
export async function setProduct(req: Request, res: Response) {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno al envias el producto" });
  }
}

/*-----------------------
-- C A T E G O R I E S --
-----------------------*/

export async function getCategories(req: Request, res: Response) {
  try {
    const allCategories = await Categories.find().sort({ order: 1 });
    res.status(200).json(allCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las categorias" });
  }
}

/*-------------
-- S H O P S --
-------------*/

export async function getStores(req: Request, res: Response) {
  try {
    const allShops = await Stores.find({}).limit(5);
    res.status(200).json(allShops);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener las categorias" });
  }
}
