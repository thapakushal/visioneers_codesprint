import express from "express";
import { registerIndividualUser, registerShopkepper, loginUser, logOutUser } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register/individual", registerIndividualUser);
router.post("/register/shopkepper", registerShopkepper);

router.post("/login", loginUser);
router.post("/logout", verifyJWT, logOutUser);

export default router;
