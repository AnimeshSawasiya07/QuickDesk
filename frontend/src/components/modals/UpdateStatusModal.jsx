import {
    Modal,
    Box,
    Typography,
    Button,
    Select,
    MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 500,
    bgcolor: "background.paper",
    p: 3,
    borderRadius: 2,
};

export default function UpdateStatusModal({
    open,
    complaint,
    onClose,
    onRequestSave,
    loading,
}) {
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (complaint) {
            setStatus(complaint.status);
        }
    }, [complaint]);

    if (!complaint) return null;

    const isResolved = complaint.status === "Resolved";
    const isUnchanged = status === complaint.status;

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6">
                    Update Complaint Status
                </Typography>

                <Typography sx={{ mt: 2 }}>
                    <b>Title:</b> {complaint.title}
                </Typography>

                <Select
                    fullWidth
                    sx={{ mt: 2 }}
                    value={status}
                    disabled={isResolved}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Resolved">Resolved</MenuItem>
                </Select>

                <Button
                    sx={{ mt: 3 }}
                    variant="contained"
                    disabled={isResolved || isUnchanged || loading}
                    onClick={() => onRequestSave(status)}
                >
                    {loading ? "Updating..." : "Save"}
                </Button>
            </Box>
        </Modal>
    );
}
