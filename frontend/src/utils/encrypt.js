import CryptoJs from "crypto-js";

export const encryptData = (data)=>{
    const secretKey = import.meta.env.VITE_SECRET_KEY;

    return CryptoJs.AES.encrypt(JSON.stringify(data),secretKey).toString();
}