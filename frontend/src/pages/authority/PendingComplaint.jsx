import { useOutletContext } from "react-router-dom";
import ComplaintsManager from "../../components/complaints/ComplaintsManager";

export default function PendingComplaint() {
    const { complaints } = useOutletContext()
    
        const pendingComplaints = complaints.filter(c=>c.status === "Pending")

    return <>
        <div className="d-flex flex-grow-1 align-items-center flex-column bg-dark pt-5">
            <ComplaintsManager complaints={pendingComplaints} isAuthority="true"/>

        </div>

    </>
}