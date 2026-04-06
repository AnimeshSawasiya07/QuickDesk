import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

export default function RootRedirect() {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  return user.role === "AUTHORITY"
    ? <Navigate to="/authority" />
    : <Navigate to="/user" />;
}
