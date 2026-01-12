import { createContext,useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user , setUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || null
    );

    const login = (data)=>{
        sessionStorage.setItem("token",data.token);
        sessionStorage.setItem("user",JSON.stringify(data.user));
        setUser(prev=>data.user);
    }

    const logout = ()=>{
        sessionStorage.clear();
        setUser(prev=>null);
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}