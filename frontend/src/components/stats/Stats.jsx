export default function Stats({complaints}){
    return <>
     <div className="stats h-25 w-100 container-fluid pt-3 ">
                <div className="row g-3 h-100">
                    <div className="col-md-3 col-sm-6 col-6">
                        <div className="bg-white h-100 rounded shadow d-flex flex-column justify-content-center">
                            <span className="fs-5 fw-semibold">Total Complaints:</span>
                            <h1 className="fw-bold">{complaints.length}</h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                        <div className="bg-white h-100 rounded shadow d-flex flex-column justify-content-center">
                            <span className="fs-5 fw-semibold">Pending :</span>
                            <h1 className="fw-bold">{complaints.filter(c => c.status === "Pending").length}</h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                        <div className="bg-white h-100 rounded shadow d-flex flex-column justify-content-center">
                            <span className="fs-5 fw-semibold">In Progress :</span>
                            <h1 className="fw-bold">{complaints.filter(c => c.status === "In Progress").length}</h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                        <div className="bg-white h-100 rounded shadow d-flex flex-column justify-content-center">
                            <span className="fs-5 fw-semibold">Resolved :</span>
                            <h1 className="fw-bold">{complaints.filter(c => c.status === "Resolved").length}</h1>
                        </div>
                    </div>
                </div>
            </div>
    </>
}