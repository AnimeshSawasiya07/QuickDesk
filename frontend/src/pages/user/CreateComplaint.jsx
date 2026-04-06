import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { encryptData } from "../../utils/encrypt";
import { toast } from "react-toastify";
import api from "../../api/axios";

export default function CreateComplaint() {
    const navigate = useNavigate();
    const { addComplaint } = useOutletContext()

    const [form, setForm] = useState({
        title: "",
        issueType: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.title || !form.issueType || !form.description) {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);

        try {
            const encryptedPayload = encryptData(form);

            const res = await api.post("/complaint", {
                payload: encryptedPayload,
            });

            toast.success("Complaint submitted successfully ✅");
            addComplaint(res.data);
            navigate("/user/complaints");
        } catch (err) {
            toast.error("Failed to submit complaint ❌");
        } finally {
            setLoading(false);
        }
    };



    return <>
        <style>
            {`
                .ph-white::placeholder {
                color: white;
                opacity:0.65;
                }
            `}
        </style>
        <div className="d-flex flex-grow-1 align-items-center flex-column bg-dark text-white">

            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-md-4 col-sm-1 h-0">

                    </div>
                    <div className="col-md-4 col-sm-10 h-100">
                        <div className="w-100 h-100 d-flex align-items-center">

                            <form onSubmit={handleSubmit} className="p-4 w-100 rounded d-flex flex-column gap-3" >

                                <h4 className="text-white mb-4 text-center">
                                    Create Complaint
                                </h4>

                                <div className="mb-3 d-flex flex-column gap-2 ">
                                    <label htmlFor="tittle" className="fs-5 align-self-start">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="fs-5 ph-white form-control bg-black text-white border-secondary"
                                        placeholder="Complaint title"
                                        value={form.title}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3 d-flex flex-column gap-2 ">
                                    <label htmlFor="issueType" className="fs-5 align-self-start">Issue Type</label>
                                    <select
                                        name="issueType"
                                        id="issueType"
                                        className="form-select bg-black text-white border-secondary fs-5"
                                        value={form.issueType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select issue type</option>
                                        <option value="Internet">Internet</option>
                                        <option value="Electricity">Electricity</option>
                                        <option value="Water">Water</option>
                                        <option value="Cleaning">Cleaning</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="mb-3 d-flex flex-column gap-2 ">
                                    <label htmlFor="description" className="fs-5 align-self-start">Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        className="fs-5 ph-white form-control bg-black text-white border-secondary"
                                        rows="4"
                                        placeholder="Describe your issue..."
                                        value={form.description}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-light w-100 fs-5 fw-bold"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Submit Complaint"}
                                </button>

                            </form>


                        </div>
                    </div>
                    <div className="col-md-4 col-sm-1 h-0">

                    </div>
                </div>
            </div>


        </div>

    </>
}