import { useOutletContext } from "react-router-dom";
import ComplaintsManager from "../../components/complaints/ComplaintsManager";

export default function ResolvedComplaints() {
    const { complaints } = useOutletContext()
    
        const resolvedComplaints = complaints.filter(c=>c.status === "Resolved")

    return <>
        <div className="d-flex flex-grow-1 align-items-center flex-column bg-dark pt-5">
            <ComplaintsManager complaints={resolvedComplaints} isAuthority="true"/>

        </div>

    </>
}