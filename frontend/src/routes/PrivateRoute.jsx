import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){
    console.log("private route")
    const {user} = useContext(AuthContext);
    console.log(user);
    
    if(!user){
       return <Navigate to="/login"/>
    }

    return children;
}