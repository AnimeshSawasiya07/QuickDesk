import express from "express"
import protect from "../middlewares/authMiddleware.js"
import { decryptPayload } from "../middlewares/decryptMiddleware.js"
import { createComplaintValidator } from "../validators/createComplaint.validator.js"
import { createComplaint, getComplaints, updateComplaintStatus } from "../controllers/Complaint.controller.js"
import { validateRequest } from "../middlewares/validate.js"
import { updateStatusValidator } from "../validators/status.validator.js"
import { authorizeRoles } from "../middlewares/roleMiddleware.js"

const router = express.Router()

router.post("/",protect,decryptPayload,createComplaintValidator,validateRequest,createComplaint);
router.get("/",protect,getComplaints);
router.put("/:id",protect,authorizeRoles("AUTHORITY"),decryptPayload,updateStatusValidator,validateRequest,updateComplaintStatus)
export default router;