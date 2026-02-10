import bcrypt from "bcryptjs";
import User from "../models/user_model.js";
import type { Request, Response } from "express";
import { createAccessToken } from "../middleware/jwt.js";

export const register = async (req: Request, res: Response) => {
  const { email, address, username, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json({ message: "Ya existe una cuenta con este e-mail" });
    if(!address || !username || !password || !email) return res.status(400).json({message: "Ingresa todos los datos"})
    if(password.length < 6) return res.status(400).json({message:"La contraseña debe contar con al menos 6 caracteres"})

    //Hasheamos la contraseña
    const hashPassword = await bcrypt.hash(password, 10);

    //Inicializamos el nuevo usuario
    const newUser = new User({
      email,
      address,
      username,
      password: hashPassword,
      cart: [],
      purchaseHistory: [],
    });
        
    //Guardamos el nuevo usuario
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id.toString() });
    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
    });
        /*-----------------------------------
        --  Vemos el resultado por consola --
        -----------------------------------*/

    //Backend
    console.log({
      id: userSaved._id,
      address: userSaved.address,
      username: userSaved.username,
      email: userSaved.email,
    });

    //Frontend
    res.json({
      id: userSaved._id,
      address: userSaved.address,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error, intentelo mas tarde." });
  }
};
