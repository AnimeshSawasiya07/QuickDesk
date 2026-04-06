import { io } from "socket.io-client";

export const connectSocket = (token) => {
    
    const socket = io("http://localhost:3000", {
        auth: { token },
    });

    socket.on("connect", () => {
        console.log("✅ FRONTEND SOCKET CONNECTED:", socket.id);
    });

    socket.on("connect_error", (err) => {
        console.log(err);
        
        console.error("❌ SOCKET CONNECT ERROR:", err.message);
    });

    return socket;
};