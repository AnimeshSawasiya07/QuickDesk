import express from "express";
import { loginUser, registerUser } from "../controllers/User.controller.js";
import { registerValidation } from "../validators/register.validator.js";
import { loginValidation } from "../validators/login.validator.js";

const router = express.Router();

router.post("/register",registerValidation,registerUser);
router.post("/login",loginValidation,loginUser);

export default router;