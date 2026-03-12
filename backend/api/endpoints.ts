import { Router } from "express";
import { logout } from "../controllers/logout.js";
import { login } from "../controllers/loginController.js";
import { register } from "../controllers/registerController.js";
import { verifyToken } from "../controllers/tokenController.js";
import { userController } from "../controllers/userController.js";
import {
  getProducts,
  getCategories,
  getStores,
} from "../controllers/jsonController.js";

const router = Router();
router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
router.get("/verify", verifyToken);
router.get("/stores", getStores);
router.get("/products", getProducts);
router.get("/categories", getCategories);
router.put("/users/:id", userController);

export default router;
