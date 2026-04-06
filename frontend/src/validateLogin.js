import { isEmpty, isValidEmail } from "./validator";

export const validateLogin = ({ email, password }) => {
    if (isEmpty(email)) return "Email is required";
    if (!isValidEmail(email)) return "Enter a valid email";

    if (isEmpty(password)) return "Password is required";

    return null;
};