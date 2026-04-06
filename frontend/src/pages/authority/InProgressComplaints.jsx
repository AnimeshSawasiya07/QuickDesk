import { useOutletContext } from "react-router-dom";
import ComplaintsManager from "../../components/complaints/ComplaintsManager";

export default function InProgressComplaints() {
    const { complaints } = useOutletContext()

    const inProgressComplaints = complaints.filter(c=>c.status === "In Progress")

    return <>
        <div className="d-flex flex-grow-1 align-items-center flex-column bg-dark pt-5">
            <ComplaintsManager complaints={inProgressComplaints} isAuthority="true"/>

        </div>

    </>
}