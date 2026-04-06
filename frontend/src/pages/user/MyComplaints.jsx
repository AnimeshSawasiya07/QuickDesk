import { useOutletContext } from "react-router-dom";
import ComplaintsManager from "../../components/complaints/ComplaintsManager";

export default function MyComplaints() {
    const { complaints } = useOutletContext()

    return <>
        <div className="d-flex flex-grow-1 align-items-center flex-column bg-dark pt-5">
            <ComplaintsManager complaints={complaints} isAuthority=""/>
        </div>

    </>
}
