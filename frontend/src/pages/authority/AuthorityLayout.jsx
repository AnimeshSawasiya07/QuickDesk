import { useEffect, useState } from "react";
import { connectSocket } from "../../../socket";
import SideBar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import api from "../../api/axios";
import Header from "../../components/header/Header";

export default function AuthorityLayout() {
    const [complaints, setComplaints] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {
        const res = await api.get("/complaint");
        setComplaints(res.data);
        console.log(complaints);

    };

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        const socket = connectSocket(token);
        console.log("useEffect (connectSocket) run");


        socket.on("complaint-status-updated", (data) => {
            console.log("Live update:", data);
        })

        socket.on("complaint:new", (newComplaint) => {
            setComplaints(prev => [newComplaint, ...prev]);
        })

        return () => socket.disconnect();

    }, [])

    const updateComplaint = (updatedComplaint) => {
        console.log("complaint update request received");
        setComplaints(prev =>
            prev.map(c =>
                c._id === updatedComplaint._id ? updatedComplaint : c
            )
        );
        console.log("complaint updated",complaints);
        
    };
    return <>
        <div className="d-flex  vh-100">
            <SideBar role="AUTHORITY" isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="d-flex flex-column w-100 vh-100">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <Outlet context={{ complaints,updateComplaint }} />
            </div>
        </div>

    </>
};