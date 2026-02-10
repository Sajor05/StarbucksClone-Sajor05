import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import User from "../models/user_model.js";
import type { Request, Response } from "express";
import type { IPayload } from "../interface/interface.js";

export async function verifyToken(req: Request, res: Response) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401);
  }

  try {
    const tokenVerify = jwt.verify(token, SECRET_KEY) as IPayload;
    const userFound = await User.findById(tokenVerify.id);
    if (!userFound) {
      return res.status(401).json({ message: "Unauthorized: user not found" });
    }
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      address: userFound.address,
      cart: userFound.cart,
      purchaseHistory: userFound.purchaseHistory,
    });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}
