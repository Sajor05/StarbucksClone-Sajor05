import type { Request, Response } from "express";

export async function logout(req: Request, res: Response) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
  return res.status(200).json({ message: "Sesión cerrada exitosamente" });
}
