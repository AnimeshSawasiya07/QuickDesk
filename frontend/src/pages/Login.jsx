import { useContext, useState } from "react";
import api from "../api/axios";
import { encryptData } from "../utils/encrypt";
import { AuthContext } from "../context/authContext";

export default function Login() {
    const { login } = useContext(AuthContext)
    const [form, setForm] = useState({ email: "", password: "" });

    const submit = async (e) => {
        e.preventDefault();

        const encryptedForm = encryptData(form);
        const response = await api.post("user/login", { payload: encryptedForm });
        console.log(response);
        login(response.data);
    }
    return (
        <div className=" d-flex align-items-center justify-content-center" style={{ height: "300px", width: "300px" }}>
            <form className="d-flex flex-column gap-2 w-100" onSubmit={submit}>
                <input className="form-control" type="email" name="email" id="email" placeholder="Enter email" onChange={(e) => setForm(prev => { return { ...prev, email: e.target.value } })} />
                <input className="form-control" type="password" name="password" id="password" placeholder="Enter password" onChange={(e) => setForm(prev => { return { ...prev, password: e.target.value } })} />
                <button className="btn btn-dark w-100">login</button>
            </form>
        </div>
    )
}