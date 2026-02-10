import path from "node:path";
import fs from "node:fs/promises";
import { cwd } from "node:process";
import Product from "../models/product_model.js";
import type { Request, Response } from "express";

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

//Getter
export async function categoriesController(req: Request, res: Response) {
  try {
    const absolutePath = path.join(cwd(), "mocks", "categories.json");
    const allProducts = await fs.readFile(absolutePath, "utf-8");
    const data = JSON.parse(allProducts);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
}
