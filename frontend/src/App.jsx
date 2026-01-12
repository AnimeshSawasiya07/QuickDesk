import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from "./pages/Dashboard"
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
    </>
  )
}

export default App
