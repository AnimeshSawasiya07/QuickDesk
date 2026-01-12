import express from "express";
import { loginUser, registerUser } from "../controllers/User.controller.js";
import { registerValidation } from "../validators/register.validator.js";
import { loginValidation } from "../validators/login.validator.js";
import { decryptPayload } from "../middlewares/decryptMiddleware.js";
import { validateRequest } from "../middlewares/validate.js";

const router = express.Router();

router.post("/register",decryptPayload,registerValidation,validateRequest,registerUser);
router.post("/login",decryptPayload,loginValidation,validateRequest,loginUser);

export default router;