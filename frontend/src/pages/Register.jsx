import { useContext, useState } from "react";
import { encryptData } from "../utils/encrypt";
import api from "../api/axios";
import { Link } from "react-router-dom";
import { validateRegister } from "../validateRegister";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" })
    const { login } = useContext(AuthContext)


    const submit = async(e) => {
        try {
            e.preventDefault();

            const error = validateRegister(form);
            if (error) {
                toast.error(error);
                return;
            }

            const encryptedForm = encryptData(form)

            await api.post("user/register", {
                payload: encryptedForm,
            });

            toast.success("Registered successfully");
            login(response.data)
        } catch (err) {
            const message =
                err.response?.data?.message || "Registration failed";

            toast.error(message);
        }
    }

    return (
        <div className="container-fluid h-100 w-100">
            <div className="row h-100">
                <div className="col-md-6 col-sm-12 bg-black">
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <img className="w-75 h-75" src="/images/QuickDesk.png" alt="QuickDesk img" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 bg-white d-flex align-items-center justify-content-center">
                    <div className="container h-100 w-100 p-0">
                        <div className="row h-100 ps-2">
                            <div className="col-md-1 col-sm-0">

                            </div>
                            <div className="col-md-9 col-sm-12 h-100 d-flex align-items-center justify-content-center">
                                <div className="d-flex align-items-center justify-content-center h-100 w-100" >
                                    <form method="POST" className="d-flex flex-column gap-4 w-75" onSubmit={submit}>
                                        <div className="fs-3 fw-semibold align-self-start w-100 text-start">
                                            <span>Register for QuicKDesk</span>
                                        </div>
                                        <div className="d-flex flex-column text-start">
                                            <label htmlFor="username" className="fs-4 align-self-start">Username</label>
                                            <input className="form-control fs-4" type="text" name="username" id="username" placeholder="Enter username" onChange={e => setForm(prev => { return { ...prev, name: e.target.value } })} />
                                            <small className="w-100">Username may only contain characters.</small>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <label htmlFor="email" className="fs-4 align-self-start">Email</label>
                                            <input className="form-control fs-4" type="text" name="email" id="email" placeholder="Enter email" onChange={e => setForm(prev => { return { ...prev, email: e.target.value } })} />
                                            <small ></small>
                                        </div>
                                        <div className="d-flex flex-column text-start">
                                            <label htmlFor="password" className="fs-4 align-self-start">Password</label>
                                            <input className="form-control fs-4" type="password" name="password" id="password" placeholder="Enter password" onChange={e => setForm(prev => { return { ...prev, password: e.target.value } })} />
                                            <small>Password should be at least 6 characters including a number and a lowercase letter.</small>
                                        </div>
                                        <div>
                                            <button className="btn btn-dark w-100 fs-4">Register</button>
                                            <small>Already have an account? <Link to="/login">Sign in →</Link></small><br />
                                            <small >By creating an account, you agree to the Terms of Service. </small>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-0">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}