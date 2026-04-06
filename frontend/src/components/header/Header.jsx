import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import './Header.css';

export default function Header({ onMenuClick }) {
    const { user, logout } = useContext(AuthContext);

    return <>
        <div className="header d-flex align-items-center px-3 ">
            <div className="h-100 w-100 d-flex">
                <div className="fw-bold w-50 d-flex align-items-center gap-3">
                    <button
                        className="btn btn-outline-dark d-md-none"
                        onClick={onMenuClick}
                    >
                        ☰
                    </button>
                    <span className="fs-4 welcome-text">Welcome,{user.name}</span>
                </div>
                <div className="w-25 d-md-block"></div>
                <div className="w-25 d-flex justify-content-center align-items-center gap-4">
                    <div className="bg-secondary role ps-3 pe-3 rounded bg-black text-white fw-medium d-flex align-items-center d-none d-md-flex">{user.role}</div>
                    <div className="v-line d-none d-md-block"></div>
                    <button className="btn btn-outline-secondary btn-sm" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    </>
};