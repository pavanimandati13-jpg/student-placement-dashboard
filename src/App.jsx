import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import JobOpenings from './pages/JobOpenings'
import MyApplications from './pages/MyApplications'
import InterviewSchedule from './pages/InterviewSchedule'
import Notifications from './pages/Notifications'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link> |{' '}
        <Link to="/registration">Registration</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/jobs">Job Openings</Link> |{' '}
        <Link to="/applications">My Applications</Link> |{' '}
        <Link to="/interviews">Interviews</Link> |{' '}
        <Link to="/notifications">Notifications</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<JobOpenings />} />
        <Route path="/applications" element={<MyApplications />} />
        <Route path="/interviews" element={<InterviewSchedule />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App