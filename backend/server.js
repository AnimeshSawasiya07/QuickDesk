import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { startComplaintEscalationJob } from "./cron/complaintEscalation.js";
import { initSocket } from "./socket.js";
dotenv.config();

connectDB().then(() => {
    const PORT = process.env.PORT || 3000;

    const server = http.createServer(app);

    initSocket(server);

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        startComplaintEscalationJob()
    })
}).catch((error) => {
    console.error("DB connection failed:", error.message);
    process.exit(1);
});