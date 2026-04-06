import { isEmpty, isStrongPassword, isValidEmail } from "./validator";

export const validateRegister = ({ name, email, password }) => {
    if (isEmpty(name)) return "Name is required";
    if (name.length < 3) return "Name must be at least 3 characters";

    if (isEmpty(email)) return "Email is required";
    if (!isValidEmail(email)) return "Enter a valid email";

    if (isEmpty(password)) return "Password is required";
    if (!isStrongPassword(password))
        return "Password must be 6+ chars and atleat have one number";

    return null;
};