import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, allowedRole }) {

    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" />
    }

    if (user.role !== allowedRole) {
        return (
            <Navigate
                to={user.role === "AUTHORITY" ? "/authority" : "/user"}
                replace
            />
        );
    }

    return children;
}