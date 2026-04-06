import { body } from "express-validator";

export const registerValidation = [

  // NAME
  body("name")
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),

  // EMAIL
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format")
    .normalizeEmail(),

  // PASSWORD
  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
    .matches(/\d/).withMessage("Password must contain at least one number"),

  // ROLE
  body("role")
    .optional()
    .isIn(["USER", "AUTHORITY", "ADMIN"])
    .withMessage("Role must be USER, AUTHORITY or ADMIN"),
];
