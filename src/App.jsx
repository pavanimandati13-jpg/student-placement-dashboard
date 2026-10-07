import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { PlacementProvider } from './context/PlacementContext'

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
    <PlacementProvider>
      <BrowserRouter>

        <div className="app-container">

          <header className="top-header">

            <div className="brand">
              <div className="brand-icon">🎓</div>

              <div>
                <h2>PlacementHub</h2>
                <span>Student Placement Portal</span>
              </div>
            </div>

            <nav className="main-nav">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/jobs">Jobs</Link>
              <Link to="/applications">Applications</Link>
              <Link to="/interviews">Interviews</Link>
              <Link to="/notifications">Notifications</Link>
              <Link to="/profile">Profile</Link>
            </nav>

            <div className="header-actions">

              <Link className="login-link" to="/">
                Login
              </Link>

              <Link className="register-btn" to="/registration">
                Register
              </Link>

            </div>

          </header>

          <main className="main-content">

            <Routes>

              <Route path="/" element={<Login />} />

              <Route
                path="/registration"
                element={<Registration />}
              />

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/profile"
                element={<Profile />}
              />

              <Route
                path="/jobs"
                element={<JobOpenings />}
              />

              <Route
                path="/applications"
                element={<MyApplications />}
              />

              <Route
                path="/interviews"
                element={<InterviewSchedule />}
              />

              <Route
                path="/notifications"
                element={<Notifications />}
              />

            </Routes>

          </main>

          <footer className="footer">
            <p>
              © 2026 PlacementHub. Student Placement Portal.
            </p>
          </footer>

        </div>

      </BrowserRouter>
    </PlacementProvider>
  )
}

export default App