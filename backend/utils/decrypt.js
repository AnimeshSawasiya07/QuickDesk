import CryptoJS from "crypto-js";

export const decryptData = (encryptedData) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, process.env.ENC_KEY);

        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedText) {
            throw new Error("Decrypted text is empty (wrong key or corrupted data)");
        }

        return JSON.parse(decryptedText);
    } catch (error) {
        console.error("Decrypt error:", error.message);
        throw new Error("Decryption failed");
    }
}