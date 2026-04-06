import cron from "node-cron";
import Complaint from "../models/Complaint.model.js";
import { getIO } from "../socket.js";

export const startComplaintEscalationJob = () => {
    cron.schedule("0 * * * *", async () => {
        console.log("[CRON] Job triggered at", new Date().toLocaleTimeString());
        try {
            const io = getIO();
            
            const timeLimit = new Date(
                Date.now() - 24 * 60 * 60 * 1000
            );

            const complaints = await Complaint.find({
                status:"Pending",
                createdAt:{$lte:timeLimit},
            }).populate("createdBy","_id");
            
            for(const complaint of complaints){
                complaint.status = "In Progress";
                await complaint.save();

                io.to(complaint.createdBy._id.toString()).emit(
                    "complaint-status-updated",
                    {
                        complaintId: complaint._id,
                        status:"In Progress",
                        source:"CRON",
                    }
                );
            }

            if(complaints.length>0){
                console.log(`[CRON] Escalated & notified ${complaints.length} complaints`); 
            }
            

        } catch (errror) {
            console.error("[CRON] Escalation failed:", error.message);
        }
    });
};