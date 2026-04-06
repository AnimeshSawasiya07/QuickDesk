import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || null
    );

    const navigate = useNavigate();

    const login = (data) => {
        if (!data?.token || !data?.user) return;
        
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("user", JSON.stringify(data.user));
        setUser(prev => data.user);

        if (data?.user?.role === "AUTHORITY") {
            navigate("/authority");
        } else {
            navigate("/user");
        }
    }

    const logout = () => {
        sessionStorage.clear();
        setUser(prev => null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}