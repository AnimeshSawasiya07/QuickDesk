import { useContext, useState } from "react";
import api from "../api/axios";
import { encryptData } from "../utils/encrypt";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

export default function Login() {
    const { login } = useContext(AuthContext)
    const [form, setForm] = useState({ email: "", password: "" });

    const submit = async (e) => {
        e.preventDefault();

        const encryptedForm = encryptData(form);
        const response = await api.post("user/login", { payload: encryptedForm });

        login(response.data);
    }
    return (
        <div className="container-fluid h-100 w-100">
            <div className="row h-100">
                <div className="col-md-4 col-sm-0 ">

                </div>
                <div className="col-md-4 col-sm-12 h-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center h-75 w-100 border border-dark" >
                        <form method="POST" className="d-flex flex-column gap-4 w-75 " onSubmit={submit}>
                            <div className="fs-3 fw-semibold align-self-start w-100">
                                <span>login in to QuicKDesk</span>
                            </div>

                            <div className="d-flex flex-column">
                                <label htmlFor="email" className="fs-4 align-self-start">Email</label>
                                <input className="form-control fs-4" type="email" name="email" id="email" placeholder="Enter email" onChange={e => setForm(prev => { return { ...prev, email: e.target.value } })} />
                                <small ></small>
                            </div>
                            <div className="d-flex flex-column text-start">
                                <label htmlFor="password" className="fs-4 align-self-start">Password</label>
                                <input className="form-control fs-4" type="password" name="password" id="password" placeholder="Enter password" onChange={e => setForm(prev => { return { ...prev, password: e.target.value } })} />
                                <small>Password should be at least 6 characters including a number and a lowercase letter.</small>
                            </div>
                            <div>
                                <button className="btn btn-dark w-100 fs-4">Login</button>
                                <small>New to QuickDesk? <Link to="/register">Create an account</Link></small><br />
                                <small >By login in, you agree to the Terms of Service. </small>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4 col-sm-0 ">

                </div>
            </div>
        </div>
    )
}