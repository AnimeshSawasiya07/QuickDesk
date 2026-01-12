import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    return <>
        <div className="d-flex flex-column">
            <h2>Welcome! {user.name}</h2>
            <div className="d-flex gap-2">
                <button>View Complaint</button>
                {user.role == "AUTHORITY" && (<button>Update Complaint Status</button>)}
                <button onClick={logout}>Logout</button>
            </div>
        </div>

    </>
}