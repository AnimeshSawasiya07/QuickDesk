import Complaint from "../models/Complaint.model.js";

export const createComplaint = async (req, res) => {
    try {
        const { title, issueType, description } = req.body

        const complaint = await Complaint.create({
            title,
            issueType,
            description,
            createdBy: req.user.id,
        })

        res.status(201).json(complaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getComplaints = async (req, res) => {
    try {
        let complaints;

        if (req.user.role === "AUTHORITY") {
            complaints = await Complaint.find().populate("createdBy", "name email")
        } else {
            complaints = await Complaint.find({ createdBy: req.user.id })
        }
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateComplaintStatus = async () => {
    try {
        const { status } = req.body;
        const { id } = req.params;

        const complaint = Complaint.findById(id);

        if (!complaint) {
            return res.status(404).json({ message: "Complaint not found" });
        }

        complaint.status = status;
        await complaint.save();

        res.status(200).json({
            message: "Status updated successfully",
            complaint,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}