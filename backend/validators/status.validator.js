import { body } from "express-validator";

export const updateStatusValidator =[
    body("status")
    .notEmpty()
    .withMessage("Status is required")
    .isIn(["Pending", "In Progress", "Resolved"])
    .withMessage("Invalid status value"),
];