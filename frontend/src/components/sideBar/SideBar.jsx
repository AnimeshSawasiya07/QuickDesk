import { NavLink } from 'react-router-dom';
import './sideBar.css';

const menuConfig = {
  AUTHORITY: [
    { label: "Dashboard", path: "/authority/dashboard", end: true },
    { label: "All Complaints", path: "/authority/complaints", end: true },
    { label: "Pending", path: "/authority/complaints/pending" },
    { label: "In Progress", path: "/authority/complaints/in-progress" },
    { label: "Resolved", path: "/authority/complaints/resolved" },
  ],
  USER: [
    { label: "Dashboard", path: "/user/dashboard" },
    { label: "My Complaints", path: "/user/complaints" },
    { label: "Create Complaint", path: "/user/create" },
  ],
};


export default function SideBar({ role, isOpen, onClose }) {
  console.log(role);


  const items = menuConfig[role];
  console.log(items);


  return (<>

    <div
      className={`sidebar-overlay ${isOpen ? "show" : ""}`}
      onClick={onClose}
    />

    <div className={`sideBar bg-black text-white vh-100 ${isOpen ? "open" : ""} `}>
      <div className='logo d-flex justify-content-center align-items-center fs-4'>QuickDesk</div>
      <ul className="p-0">
        {items.map((option) => (
          <li key={option.path}>
            <NavLink
              to={option.path}
              end={option.end}
              onClick={onClose}
              className={({ isActive }) =>
                `nav-link ps-4 text-start ${isActive ? "active" : ""}`
              }
            >
              {option.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
}
