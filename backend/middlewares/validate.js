import { validationResult } from "express-validator";

export const validateRequest = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                message: "Validation failed",
                errors: errors.array(),
            });
        }

        next();

    } catch (error) {

    }
}