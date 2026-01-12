import { decryptData } from "../utils/decrypt.js";

export const decryptPayload = (req, res, next) => {
    console.log(req.body);
    
    console.log(req?.body?.payload);
    
    try {
        if (!req.body.payload) {
            return res.status(400).json({ message: "Encrypted payload missing" });
        }

        const decryptedBody = decryptData(req.body.payload);
console.log("decrytedBody : ",decryptedBody);

        // overwrite req.body with decrypted data
        req.body = decryptedBody;

        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Invalid encrypted payload" });
    }
}