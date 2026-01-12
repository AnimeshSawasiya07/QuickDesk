import { useState } from "react";
import { encryptData } from "../utils/encrypt";
import api from "../api/axios";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" })


    const submit = (e) => {
        e.preventDefault();

        const encryptedForm = encryptData(form)

        api.post("user/register", {
            payload: encryptedForm,
        });

        alert("Registered successfully");
    }

    return (
        <div className=" d-flex align-items-center justify-content-center" style={{ height: "300px", width: "300px" }}>
            <form className="d-flex flex-column gap-2 w-100" onSubmit={submit}>
                <input className="form-control" type="text" name="username" id="username" placeholder="Enter username" onChange={e => setForm(prev => { return { ...prev, name: e.target.value } })} />
                <input className="form-control" type="email" name="email" id="email" placeholder="Enter email" onChange={e => setForm(prev => { return { ...prev, email: e.target.value } })} />
                <input className="form-control" type="password" name="password" id="password" placeholder="Enter password" onChange={e => setForm(prev => { return { ...prev, password: e.target.value } })} />
                <button className="btn btn-dark w-100">Register</button>
            </form>
        </div>
    )
}