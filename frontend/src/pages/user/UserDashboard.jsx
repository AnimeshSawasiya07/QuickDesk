import { useOutletContext } from "react-router-dom";
import ComplaintsManager from "../../components/complaints/ComplaintsManager";
import Stats from "../../components/stats/Stats";

export default function UserDashboard() {
    const { complaints } = useOutletContext();

    const recent = complaints.slice(0, 5);

    return <>
        <div className="d-flex flex-grow-1 align-items-center flex-column pt-5 bg-dark">

            <Stats complaints={complaints}/>

            <hr className="border border-dark w-75 mt-5 mb-4" />

            <h3 className="w-100 ps-5 text-start text-white ">Recent Complaints</h3>

            <ComplaintsManager complaints={recent} isAuthority="" />
        </div>

    </>
}