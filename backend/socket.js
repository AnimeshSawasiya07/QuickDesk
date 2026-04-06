import { Server } from "socket.io";
import jwt from "jsonwebtoken";

let io;

export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "http://localhost:5173",
            credentials: true,
        },
    });
    io.use((socket, next) => {
        try {
            const token = socket.handshake.auth.token;

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            socket.user = decoded;
            next();
        } catch (error) {
            next(new Error("Authentication error"));
        }
    });

    io.on("connection", (socket) => {
        console.log(`[SOCKET] User connected: ${socket.user.id} (${socket.user.role})`);

        // personal room
        socket.join(socket.user.id);

        // authority room
        if (socket.user.role === "AUTHORITY") {
            socket.join("authority");
            console.log("[SOCKET] Authority joined authority room");
        }

    });
};

export const getIO = () => {
    if (!io) throw new Error("Socket not initialized");
    return io;
}