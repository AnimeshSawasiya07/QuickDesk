import { body } from "express-validator";

export const createComplaintValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),

  body("issueType")
    .notEmpty()
    .withMessage("Issue type is required")
    .isIn(["Electricity", "Water", "Internet","Cleaning", "Other"])
    .withMessage("Invalid issue type"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters"),
];
