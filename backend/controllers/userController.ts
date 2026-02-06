import User from "../models/user_model.js";
import type { Request, Response } from "express";

export async function userController(req: Request, res: Response) {
  const { email, cart, purchaseHistory } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
        {email},
        {cart:cart, purchaseHistory:purchaseHistory},
        {new:true}
    );
    console.log("n\n\n\UpdatedUser: ", updatedUser)
    if (!updatedUser) return res.status(404).json({ message: "Usuario no encontrado" });
    return res.json(updatedUser);
  
    } catch (error) {
            return res.status(500).json({ message: "Error al actualizar los datos" });
  }
}