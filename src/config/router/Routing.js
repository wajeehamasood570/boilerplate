import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Services from '../../Pages/Services'
import Profile from '../../Pages/Profile'
import Login from '../../Pages/Login'
import Dashboard from '../../Pages/Dashboard'
import Project from '../../Pages/Project'
import Addproject from '../../Pages/Addproject'
import Signup from '../../Pages/Signup'
import Protected from '../../Pages/Protected'
import Admin from '../../Pages/Admin'
import Student from '../../Pages/Student'
import Quiz from '../../Pages/Quiz'

const Routing = () => {
  return (
    <>
    <Router>
        {/* <nav>
            <Link  className="m-2" to="/">Home</Link>
            <Link className="m-2" to="/about">about</Link>
            <Link className="m-2" to="/services">Services</Link>
            <Link className="m-2" to="/profile/:id">Profile</Link>
            <Link className="m-2" to="/login">Login</Link>
            <Link className="m-2" to="/dashboard">Dashboard</Link>
            <Link className="m-2" to="/projects">Projects</Link>
            <Link className="m-2" to="/signup">SignUp</Link>

        </nav> */}
        <Routes>
        <Route path='/' element={<Protected Screen={Admin} />} />
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="about" element={<About/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="profile/:id" element={<Profile/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="admin" element={<Admin/>}/>
            <Route path="quiz" element={<Quiz/>}/>
            <Route path="student" element={<Student/>}/>
            <Route path="dashboard/*" element={<Dashboard/>}/>
            <Route path="projects" element={<Project/>}/>
            <Route path="add" element={<Addproject/>}/>
            <Route path="add/:id" element={<Addproject/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default Routing