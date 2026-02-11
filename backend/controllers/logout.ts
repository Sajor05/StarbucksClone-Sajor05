import type { Request, Response } from "express";

export async function logout(req: Request, res: Response) {
  const isProduction = process.env.NODE_ENV === "production";
  res.clearCookie("token", {
    httpOnly: true,
    secure: isProduction ? true : false,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
  });
  return res.status(200).json({ message: "Sesión cerrada exitosamente" });
}
