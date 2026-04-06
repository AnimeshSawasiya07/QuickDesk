import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from "./pages/authority/Dashboard"
import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import AllComplaints from './pages/authority/AllComplaints'
import PendingComplaint from './pages/authority/PendingComplaint'
import InProgressComplaints from './pages/authority/InProgressComplaints'
import ResolvedComplaints from './pages/authority/ResolvedComplaints'
import AuthorityLayout from './pages/authority/AuthorityLayout'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserLayout from './pages/user/UserLayout'
import UserDashboard from './pages/user/UserDashboard'
import MyComplaints from './pages/user/MyComplaints'
import RootRedirect from './components/RootRedirect'
import CreateComplaint from './pages/user/CreateComplaint'

function App() {

  return (
    <>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        <Route path="/authority" element={<PrivateRoute allowedRole="AUTHORITY"><AuthorityLayout /></PrivateRoute>}>
          <Route index element={<Navigate to="dashboard" replace />}
          />
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="complaints" element={<AllComplaints />} />
          <Route path="complaints/pending" element={<PendingComplaint />} />
          <Route path="complaints/in-progress" element={<InProgressComplaints />} />
          <Route path="complaints/resolved" element={<ResolvedComplaints />} />
        </Route>

        <Route path="/user" element={<PrivateRoute allowedRole="USER"><UserLayout /></PrivateRoute>}>
          <Route index element={<Navigate to="dashboard" replace />}
          />
          <Route path="dashboard" element={<UserDashboard />}></Route>
          <Route path="complaints" element={<MyComplaints />} />
          <Route path="create" element={<CreateComplaint />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App
