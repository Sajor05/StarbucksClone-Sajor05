import { Router } from "express";
import {
  getProducts,
  categoriesController,
} from "../controllers/jsonController.js";
import { userController } from "../controllers/userController.js";
import { logout } from "../controllers/logout.js";
import { login } from "../controllers/loginController.js";
import { register } from "../controllers/registerController.js";
import { verifyToken } from "../controllers/tokenController.js";

const router = Router();
router.put("/users/:id", userController);
router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
router.get("/verify", verifyToken);
router.get("/products", getProducts);
router.get("/categories", categoriesController);

export default router;
