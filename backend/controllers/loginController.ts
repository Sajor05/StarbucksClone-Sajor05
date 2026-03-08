import bcrypt from "bcryptjs";
import User from "../models/user_model.js";
import type { Request, Response } from "express";
import { createAccessToken } from "../middleware/jwt.js";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const errormsg = "Revisa los datos ingresados";
  try {
    const isProduction = process.env.NODE_ENV === "production";
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: errormsg });
    const matches = await bcrypt.compare(password, userFound.password);
    if (!matches) {
      return res
        .status(400)
        .json({ message: errormsg });
    }
    const token = await createAccessToken({ id: userFound._id.toString() });
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction ? true : false,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      id: userFound._id,
      email: userFound.email,
      address: userFound.address,
      username: userFound.username,
      cart: userFound.cart,
      purchaseHistory: userFound.purchaseHistory,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
