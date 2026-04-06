import { useRef, useState } from "react";
import "./complaintsTable.css";

export default function ComplaintsTable({
    complaints,
    isAuthority,
    onViewDescription,
    onStatusUpdate,
}) {
    if (complaints.length === 0) {
        return <p className="empty-text">No complaints found</p>;
    }

    const [open, setOpen] = useState(false);
    const [desc, setDesc] = useState("");

    const tableRef = useRef(null);
    const [scrollDir, setScrollDir] = useState("right");

    const handleScroll = () => {
        const el = tableRef.current;

        if (!el) return;

        const isAtStart = el.scrollLeft === 0;
        const isAtEnd =
            el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

        if (isAtStart) setScrollDir("right");
        else if (isAtEnd) setScrollDir("left");
        else setScrollDir("both");
    }

    return (
        <>
            <div className="table-container">
                <div className="scroll-hint d-md-none w-100">
                    {scrollDir === "right" && "Swipe →"}
                    {scrollDir === "left" && "← Swipe"}
                    {scrollDir === "both" && "← Swipe →"}
                </div>
                <div className="table-wrapper" ref={tableRef} onScroll={handleScroll}>
                    <table className="complaints-table text-white">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Issue Type</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Date</th>
                                {isAuthority && <th>Action</th>}
                            </tr>
                        </thead>

                        <tbody>
                            {complaints.map((c) => (
                                <tr key={c._id}>
                                    <td className="cell-title">{c.title}</td>
                                    <td>{c.issueType}</td>
                                    <td className="desc-cell">
                                        <span className="desc-text">
                                            {c.description}
                                        </span>
                                        <span
                                            className="view-more"
                                            onClick={() => onViewDescription(c.description)}
                                        >
                                            View
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className={`status-badge ${c.status
                                                .toLowerCase()
                                                .replace(" ", "_")}`}
                                        >
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="date-cell">{new Date(c.createdAt).toLocaleDateString()}</td>

                                    {isAuthority && (
                                        <td>
                                            <button
                                                className="action-btn"
                                                onClick={() => onStatusUpdate(c)}
                                            >
                                                Update
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
